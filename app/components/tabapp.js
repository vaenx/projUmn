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
      <TabBarIOS barTintColor="white" tintColor="#0187B3" clipToBounds="true" style={styles.tabbar}>
        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.selectedTab === 'Overview'}
          onPress={() => this.setTab('Overview')}>
          <View>
            <Text style={styles.content}><Overview /></Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <View>
            <Text style={styles.content}><Goals /></Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}>
          <View>
            <Text style={styles.content}><Limits /></Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'tabFour'}
          onPress={() => this.setTab('tabFour')}>
          <View>
            <Text style={styles.content}><Settings /></Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

  const styles = StyleSheet.create({
    content: {
      marginTop: "12%",
      height: 667,
      marginHorizontal: "5%",
    },
    tabbar: {
      borderWidth: 0.0
    }
  }
)
