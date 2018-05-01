import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View } from 'react-native';
import Overview from './overview';
import Goals from './goals';
import Limits from './limits';
import Settings from './settings';

export default class TabApp extends React.Component {
  constructor() {
    super();
    this.state = {selectedTab: 'Overview'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }
  render() {
    return (
      <TabBarIOS
        barTintColor="white"
        tintColor="#0187B3"
        clipToBounds="true"
        style={styles.tabbar}>
        <TabBarIOS.Item
          icon={{uri: 'overviewIcon'}}
          style={styles.tabBarIcon}
          title="Overview"
          selected={this.state.selectedTab === 'Overview'}
          onPress={() => this.setTab('Overview')}>
          <Text><Overview /></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'goalsIcon'}}
          style={styles.tabBarIcon}
          title="Goals"
          selected={this.state.selectedTab === 'Goals'}
          onPress={() => this.setTab('Goals')}>
          <Text><Goals /></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'limitsIcon'}}
          style={styles.tabBarIcon}
          title="Limits"
          selected={this.state.selectedTab === 'Limits'}
          onPress={() => this.setTab('Limits')}>
          <Text><Limits /></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: 'settingsIcon'}}
          style={styles.tabBarIcon}
          title="Settings"
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => this.setTab('Settings')}>
          <Text><Settings /></Text>
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
