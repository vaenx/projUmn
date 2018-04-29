import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground } from 'react-native';
import OnboardingLimits from './onboardinglimits';
import OnboardingSetProfile from './onboardingsetprofile';

export default class OnboardingGoals extends React.Component {
  constructor(props) {
    super(props);
  }
  handleAddNewGoal() {

  }
  handleOnboardingLimits() {
    this.props.navigator.push({
      component: OnboardingLimits,
      navigationBarHidden: true,
    })
  }
  handleBackToSetProfile() {
    this.props.navigator.pop({
      component: OnboardingSetProfile,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground source={{uri: 'bgLightBlueAlt'}} style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set 3 monthly goals</Text>
            <View style={styles.addGoalContainer}>
              <TouchableHighlight
                style={styles.buttonAddGoal}
                onPress={this.handleAddNewGoal.bind(this)}
                underlayColor='#023543'>
                <Text style={styles.buttonAddGoalText}>+</Text>
              </TouchableHighlight>
              <Text style={styles.addGoalText}>Add new goal</Text>
            </View>
            <Text style={styles.textBody}>Goals are useful to keep a vision and get you back on track.</Text>
            <Text style={styles.textNeutral}>You have no goals set yet.</Text>
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToSetProfile.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonTextNegative}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContinueSmall}
            onPress={this.handleOnboardingLimits.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonText}>CONTINUE</Text>
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
    color: '#011B22'
  },
  textNeutral: {
    marginTop: "5%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    color: '#A7A7A7'
  },
  addGoalText: {
    fontSize: 16,
    marginHorizontal: "5%",
    marginTop: "0.5%",
    color: '#011B22'
  },
  buttonAddGoal: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#011B22',
  },
  buttonAddGoalText: {
    color: '#FFFFFF',
    margin: "8%",
    fontSize: 16,
    alignSelf: 'center'
  },
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginTop: "12%",
    marginLeft: "10%",
    borderBottomColor: '#011B22',
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 2,
    width: "80%",
    paddingBottom: "12%"
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
