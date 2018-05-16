import React, { Component } from 'react';
import { RNLockState } from 'react-native-lockstate';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View, AppState } from 'react-native';

export default class LockStateCheck extends Component {
  state = {
    lockState: RNLockState.currentState,
  }

  _handleLockStateChange = (thisLockState) => {
    if (this.state.lockState.match(/lockcomplete/) && thisLockState === 'lock') {
      console.log('locked!')
    } else {
      console.log('unlocked!')
    }
    this.setState({lockState: nextAppState});
  }

  componentDidMount() {
    RNLockState.addEventListener('change', this._handleLockStateChange);
  }

  componentWillUnmount() {
    RNLockState.removeEventListener('change', this._handleLockStateChange);
  }

  render() {
    return (
        <Text></Text>
    );
  }
}


//app is in the background
