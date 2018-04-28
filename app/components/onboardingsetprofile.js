import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
import OnboardingGoals from './onboardinggoals';

export default class OnboardingSetProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOnboardingGoals() {
    this.props.navigator.push({
      component: OnboardingGoals,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.textTitle}>Set your profile</Text>
          // textinput birthday and gender
        </ScrollView>
        <TouchableHighlight
          style={styles.buttonContinueSmall}
          onPress={this.handleOnboardingGoals.bind(this)}
          underlayColor='#023543'>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    lineHeight: 26,
  },
  textBody: {
    marginTop: "12%",
    fontSize: 16,
    lineHeight: 26,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "8%",
    fontSize: 14,
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    marginBottom: "-22%",
    marginRight: "10%",
    alignSelf: "flex-end",
    backgroundColor: '#011B22',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: "12%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
