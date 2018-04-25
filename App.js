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
  View
} from 'react-native';

import Main from './app/components/main';
import Overview from './app/components/overview';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.mainContainer}
        initialRoute={{
          title: 'Main',
          component: Main,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    maxHeight: 700,
    backgroundColor: '#111111',
  },
});
