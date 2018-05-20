import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, Slider } from 'react-native';
import Overview from './overview';
import OnboardingGoals from './onboardinggoals';
import TabApp from './tabapp';
import TimeOnScreenLimit from './timeonscreenlimit';
import UnlocksLimit from './unlockslimit';
import {setAppLaunched} from '../utils/checkIfFirstLaunch';

export default class OnboardingLimits extends React.Component {
  constructor(props) {
    super(props);
  }
  handleToOverview() {
    setAppLaunched();
    this.props.navigator.replaceAtIndex({
      component: TabApp,
      navigationBarHidden: true,
    }, 0);
    this.props.navigator.popN(5);
  }
  handleBackToGoals() {
    this.props.navigator.pop({
      component: OnboardingGoals,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set time limits</Text>
            <TimeOnScreenLimit />
            <UnlocksLimit />
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToGoals.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonTextNegative}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContinueSmall}
            onPress={this.handleToOverview.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonText}>FINISH</Text>
          </TouchableHighlight>
        </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: "5%",
    marginHorizontal: "10%",
    fontSize: 22,
    lineHeight: 28,
    fontWeight:'bold'
  },
  textBody: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
  },
  textSlider: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 18,
  },
  textSliderLabel: {
    marginTop: "3%",
    marginHorizontal: "10%",
    color: '#797979',
    fontSize: 14
  },
  textDailyLimit: {
    marginTop: "5%",
    marginRight: "10%",
    color: '#011B22',
    fontSize: 14,
    alignSelf: "flex-end"
  },
  timeOnScreenSlider: {
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "8%",
    marginHorizontal: "3%",
    fontSize: 14,
    fontWeight: "700"
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#011B22',
  },
  buttonBack: {
    width: 140,
    height: 40,
    // backgroundColor: 'white',
  },
  buttonTextNegative: {
    color: '#011B22',
    margin: "8%"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: "10%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#A7A7A7',
    shadowOffset: { height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "center",
    marginBottom: "-12%",
  },
  bgImage: {
    flex: 1
  }
});
