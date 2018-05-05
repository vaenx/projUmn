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
import Overview from './app/components/overview';
import OnboardingGoals from './app/components/onboardinggoals';

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Set Profile',
          navigationBarHidden: true,
          translucent: true,
          shadowHidden: true,
          component: OnboardingGoals
        }}
        style={styles.mainContainer}/>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
