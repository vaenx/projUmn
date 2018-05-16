import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import LockStateCheck from './app/utils/lockstateCheck';
import AppStateCheck from './app/utils/appStateCheck';
import { checkIfFirstLaunch } from './app/utils/checkIfFirstLaunch';

import Test from './app/components/test';
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

  // constructor(props){
  //   super(props);
  //   this.state = {
  //       timestamp: 0
  //   };
  //
  //   this.setState({
  //      timestamp: moment()
  //  });
  //  {
  //    console.log(this.setState.timestamp);
  //  }
  // }

  render() {

    //     // this example takes 2 seconds to run
    // var timestamp = Date.now();
    //
    // console.log("starting timer...");
    // // expected output: starting timer...
    //
    // setTimeout(function() {
    //   var millis = Date.now() - timestamp;
    //
    //   console.log("seconds elapsed = " + Math.floor(millis/1000));
    //   // expected output : seconds elapsed = 2
    // });


    const timestamp = new Date(); {
      console.log(timestamp.toLocaleTimeString()
      );
    }

    {
      BackgroundTimer.start(); {
        console.log('background timer here');
      }
    }

    let StartComponent = Overview; //Main
    checkIfFirstLaunch().then(function(res) {
      if (res) {
        StartComponent = Overview;
      } else {
        StartComponent = Main; //Overview
      }
    });

    return (
        <NavigatorIOS
          initialRoute={{
            title: 'Set Profile',
            navigationBarHidden: true,
            translucent: true,
            shadowHidden: true,
            component: StartComponent,
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
