import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput } from 'react-native';
import OnboardingGoals from './onboardinggoals';
import Main from './main';

export default class OnboardingSetProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday:'',
      isLoading: false,
      error: false
    }
  }
  handleChange (event) {
    this.setState({
      birthday: event.nativeEvent.text,
      gender: event.nativeEvent.text
    });
  }
  handleOnboardingGoals() {
    this.props.navigator.push({
      component: OnboardingGoals,
      navigationBarHidden: true,
    })
    this.setState({
      isLoading: true,
    });
    console.log('SUBMIT', this.state.birthday);
  }
  handleBackToMain() {
    this.props.navigator.pop({
      component: Main,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground source={{uri: 'bgLightBlueAlt'}} style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set your profile</Text>
            <Text style={styles.textBody}>Birthday (DD/MM/YYYY)</Text>
              <TextInput
                style={styles.inputField}
                value={this.state.birthday}
                onChange={this.handleChange.bind(this)} />
            <Text style={styles.textBody}>Gender (Male/Female)</Text>
              <TextInput
                style={styles.inputField}
                value={this.state.gender}
                onChange={this.handleChange.bind(this)} />
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToMain.bind(this)}
            underlayColor='#023543'>
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
