import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View } from 'react-native';
import LockStateCheck from './app/utils/lockstateCheck';

import TabApp from './app/components/tabapp';
import Main from './app/components/main';
import Overview from './app/components/overview';
import OnboardingGoals from './app/components/onboardinggoals';
import Goals from './app/components/goals';
import Limits from './app/components/limits';
import OnboardingSetProfile from './app/components/onboardingsetprofile';
import OnboardingSetProfile2 from './app/components/onboardingsetprofile2';
import OnboardingLimits from './app/components/onboardinglimits';
import NotificationScreenBlue from './app/components/notificationscreenblue';
import NotificationScreenRed from './app/components/notificationscreenred';
import NotificationScreenNude from './app/components/notificationscreennude';
import TimeOfDeath from './app/components/timeofdeath';

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Set Profile',
          navigationBarHidden: true,
          translucent: true,
          shadowHidden: true,
          component: TimeOfDeath,
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
