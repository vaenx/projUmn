import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput, DatePickerIOS, Picker, AsyncStorage } from 'react-native';
import OnboardingGoals from './onboardinggoals';
import Main from './main';
import OnboardingSetProfile2 from './onboardingsetprofile2';
import SetProfileFormCountry from './setprofileformcountry';

export default class OnboardingSetProfile3 extends React.Component {
  constructor(props) {
    super(props); {
      this.state={
        country: '',
      };
    this.handleUpdateCountry = this.handleUpdateCountry.bind(this);
    }
  }
  handleUpdateCountry(country) {
    this.setState({
      value: country
    });
    console.log(country);
  }
  handleOnboardingGoals() {
    this.props.navigator.push({
      component: OnboardingGoals,
      navigationBarHidden: true,
    })
  }
  async handleBackToOnboardingSetProfile2() {
    await AsyncStorage.setItem('country', this.state.country);
    this.props.navigator.pop({
      component: OnboardingSetProfile2,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set your profile</Text>
            <SetProfileFormCountry
              updateCountryChoice={this.handleUpdateCountry}/>
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToOnboardingSetProfile2.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonTextNegative}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContinueSmall}
            onPress={this.handleOnboardingGoals.bind(this)}
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
  },
  inputField: {
    marginTop: 10,
    marginHorizontal: "10%",
    borderBottomColor: '#011B22',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    height: 30,
    fontSize: 16,
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
    marginBottom: "8%",
  },
  buttonBack: {
    width: 140,
    height: 40,
    marginBottom: "8%",
    // backgroundColor: 'white',
  },
  buttonTextNegative: {
    color: '#011B22',
    margin: "8%"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: "8%",
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
