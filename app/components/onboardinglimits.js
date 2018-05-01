import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, Slider } from 'react-native';
import Overview from './overview';
import OnboardingGoals from './onboardinggoals';

export default class OnboardingLimits extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      maxHours: 8,
      maxUnlocks: 300,
    }
    this.setState = this.setState.bind(this);
  }
  onValueChangeTime(valueTime) {
    this.props.value({
      valueTime: '',
    })
  }
  onValueChangeUnlocks(valueUnlocks) {
    this.props.value({
      valueUnlocks: '',
    })
  }
  handleToOverview() {
    this.props.navigator.push({
      component: Overview,
    })
  }
  handleBackToGoals() {
    this.props.navigator.pop({
      component: OnboardingGoals,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground source={{uri: 'bgLightBlueAlt'}} style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set time limits</Text>
            <Text style={styles.textSlider}>Time on screen</Text>
            <Text style={styles.textDailyLimit}>Daily limit: {this.state.onValueChangeTime}</Text>
            <Slider
              style={styles.timeOnScreenSlider}
              maximumValue={this.state.maxHours}
              onValueChange={this.state.onValueChangeTime}
              step={1} />
            <Text style={styles.textSliderLabel}>Recommended: 3h</Text>
            <Text style={styles.textSlider}>Phone Unlocks</Text>
            <Text style={styles.textDailyLimit}>Daily limit: {this.state.onValueChangeUnlocks}</Text>
            <Slider
              style={styles.timeOnScreenSlider}
              maximumValue={this.state.maxUnlocks}
              thumbTintColor='#023543'
              step={10} />
            <Text style={styles.textSliderLabel}>Recommended: 90 unlocks</Text>
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
    marginVertical: "12%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#355C69',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
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
