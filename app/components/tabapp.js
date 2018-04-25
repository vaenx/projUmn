import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View } from 'react-native';
import Main from './main';
import Goals from './goals';
import Limits from './limits';
import Settings from './settings';

export default class TabApp extends React.Component {
  constructor() {
    super();
    this.state = {selectedTab: 'Main'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }
  render() {
    return (
      <TabBarIOS barTintColor="white" tintColor="#0187B3">
        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.selectedTab === 'Main'}
          onPress={() => this.setTab('Main')}>
          <View>
            <Text style={styles.content}><Main /></Text>
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
      marginTop: 50,
      height: 667,
      marginHorizontal: 20,
    },
  }
)
