import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View, AsyncStorage } from 'react-native';
import Goals from './goals';
import Limits from './limits';
import Test from './test';
import Settings from './settings';

export default class TabApp extends React.Component {
  constructor() {
    super();
    this.state = {selectedTab: 'Overview'}
    this.profile = {
      gender: 'not loaded',
      country: 'not loaded',
      birthdate: 'not loaded'
     }
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  async componentDidMount() {
    this.profile.gender = await AsyncStorage.getItem('gender');
    this.profile.country = await AsyncStorage.getItem('country');
    this.profile.birthdate = await AsyncStorage.getItem('birthdate');
  }

  render() {
    return (
      <TabBarIOS
        barTintColor="white"
        tintColor="#011B22"
        clipToBounds="true"
        style={styles.tabbar}>
        <TabBarIOS.Item
          icon={{uri: 'overviewIcon'}}
          title="Overview"
          selected={this.state.selectedTab === 'Overview'}
          onPress={() => this.setTab('Overview')}>
          <Test elapsedTime={this.state.elapsed_time} profile={this.profile} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'goalsIcon'}}
          title="Goals"
          selected={this.state.selectedTab === 'Goals'}
          onPress={() => this.setTab('Goals')}>
          <Goals />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'limitsIcon'}}
          title="Limits"
          selected={this.state.selectedTab === 'Limits'}
          onPress={() => this.setTab('Limits')}>
          <Limits />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'settingsIcon'}}
          title="Settings"
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => this.setTab('Settings')}>
          <Settings />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

  const styles = StyleSheet.create({
    tabbar: {
      borderWidth: 0.0
    },
  }
)
