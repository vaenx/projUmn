import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput, DatePickerIOS, Picker } from 'react-native';
import OnboardingSetProfile2 from './onboardingsetprofile2';
import Main from './main';
import SetProfileFormGender from './setprofileformgender';

export default class OnboardingSetProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      gender: [],
    };
    this.handleUpdateGender = this.handleUpdateGender.bind(this);
  }

  handleUpdateGender(gender) {
    this.setState({
      value: gender
    });
    console.log(gender);
  }

  handleOnboardingSetProfile2() {
    this.props.navigator.push({
      component: OnboardingSetProfile2,
      navigationBarHidden: true,
    })
  }
  async handleBackToMain() {
    AsyncStorage.setItem('gender', this.state.gender);
    this.props.navigator.pop({
      component: Main,
      navigationBarHidden: true,
    })
  }

  render() {
    return (
      <ImageBackground style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set your profile</Text>
            <SetProfileFormGender
              updateGender={this.handleUpdateGender}/>
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToMain.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonTextNegative}></Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContinueSmall}
            onPress={this.handleOnboardingSetProfile2.bind(this)}
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
