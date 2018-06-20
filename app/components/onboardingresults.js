import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput, DatePickerIOS, Picker } from 'react-native';
import OnboardingSetProfile2 from './onboardingsetprofile2';
import Main from './main';
import SetProfileFormGender from './setprofileformgender';

export default class OnboardingResults extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      gender: [],
    };
    this.handleUpdateGender = this.handleUpdateGender.bind(this);
    this.handleGenderChoice = this.handleGenderChoice.bind(this);
  }

  handleUpdateGender(gender) {
    this.setState({
      value: gender
    });
  }

  handleOnboardingSetProfile2() {
    this.props.navigator.push({
      component: OnboardingSetProfile2,
      navigationBarHidden: true,
    })
  }
  async handleGenderChoice() {
    AsyncStorage.getItem('gender', this.state.gender);
    this.props.navigator.pop({
      component: Main,
      navigationBarHidden: true,
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.textBody}>oi{this.handleGenderChoice}</Text>
        <SetProfileFormGender
          updateGender={this.handleUpdateGender}/>
      </View>
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
    marginVertical: "8%",
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
