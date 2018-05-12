import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, Slider, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground } from 'react-native';
import Overview from './overview';

export default class TimeOfDeath extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBackToOverview() {
    this.props.navigator.replace({
      component: Overview,
      navigationBarHidden: true,
    });
  }
  render() {
    return (
      <ImageBackground source={{uri: 'bgTimeOfDeath'}} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.textBodyAlt1}>Your Umn time is limited</Text>
          <View style={styles.bgContainerTODCounter}>
            <ImageBackground source={{uri: 'concentricPulseTOD'}} style={styles.bgImageTODCounter}>
              <View style={styles.counterContainer}>
                <Text style={styles.textDeathCounter}>2064</Text>
                <Text style={styles.textBodyAlt}>year of death</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.yearsLeftContainer}>
            <Text style={styles.textBodyAlt2}> 57 years left to live</Text>
          </View>
          <TouchableHighlight
            onPress={this.handleBackToOverview.bind(this)}>
            <Text style={styles.buttonText}>BE UMN</Text>
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
  textBodyAlt1: {
    color: "white",
    marginTop: "20%",
    marginBottom: "26%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  textBodyAlt2: {
    color: "white",
    marginTop: "32%",
    marginBottom: "12%",
    fontSize: 16,
    lineHeight: 26,
  },
  textBodyAlt: {
    color: "white",
    marginTop: "3%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  textDeathCounter: {
    color: "white",
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "800",
    marginTop: "8%",
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
  bgContainerTODCounter: {
    width: 250,
    height: 283,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#284950",
    marginVertical: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
  },
  counterContainer: {
    alignContent: "center",
    marginVertical: "32%",
  },
  yearsLeftContainer: {
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
  },
  bgImageTODCounter: {
    marginVertical: "12%",
    height: "100%",
  },
});
