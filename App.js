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
import Main from './app/components/main';
import OnboardingSetProfile from './app/components/onboardingsetprofile';

export class App extends React.Component {
  render() {
    return (
      <TabApp />
    );
  }
}

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Set Profile',
          navigationBarHidden: true,
          translucent: true,
          shadowHidden: true,
          component: Main
        }}
        style={styles.mainContainer}/>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
