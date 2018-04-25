/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  NavigatorIOS,
  ScrollView,
  TabBarIOS,
  View
} from 'react-native';

import TabApp from './app/components/tabapp';

export default class App extends React.Component {
  render() {
    return (
      <TabApp />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
