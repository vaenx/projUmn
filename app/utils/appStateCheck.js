import React, { Component } from 'react';
import { RNLockState } from 'react-native-lockstate';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View, AppState } from 'react-native';

export default class AppStateCheck extends Component {

  state = {
    appState: AppState.currentState,
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('Abriu!')
    } else {
      console.log('Fechou!')
    }
    this.setState({appState: nextAppState});
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  render() {
    return (
        <Text></Text>
    );
  }
}
