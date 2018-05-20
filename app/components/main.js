import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground } from 'react-native';
import OnboardingSetProfile from './onboardingsetprofile';
import AppStateCheck from '../utils/appStateCheck';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSetProfile() {
    this.props.navigator.push({
      component: OnboardingSetProfile,
      navigationBarHidden: true,
    });
  }
  render() {
    return (
      <ImageBackground style={styles.bgImage}>
        <AppStateCheck />
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set your profile{"\n"}and start using Umn!</Text>
            <Text style={styles.textBody}>Most digital services feed on people’s attention and are therefore designed to have you spend more time there. From endless scrolling to addictive pull-down-to-refresh features, digital businesses use powerful persuasive design techniques to keep us hooked to our devices.{"\n"}{"\n"}Use Umn to track your online behavior and get control back.</Text>
          </ScrollView>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSetProfile.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonText}>SET PROFILE</Text>
          </TouchableHighlight>
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
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "6%",
    fontSize: 16,
    fontWeight: "700"
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    marginBottom: "-20%",
    alignSelf: "center",
    backgroundColor: '#011B22',
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
  bgImage: {
    flex: 1,
  }
});
