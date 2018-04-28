import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
import OnboardingLimits from './onboardinglimits';

export default class OnboardingGoals extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOnboardingLimits() {
    this.props.navigator.push({
      component: OnboardingLimits,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.textTitle}>Set 3 monthly goals</Text>
          <Text style={styles.textBody}>insert goal list on code</Text>
        </ScrollView>
        <TouchableHighlight
          style={styles.buttonContinueSmall}
          onPress={this.handleOnboardingLimits.bind(this)}
          underlayColor='#023543'>
          <Text style={styles.buttonText}>Continue</Text>
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
  },
  buttonContinueSmall: {
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
