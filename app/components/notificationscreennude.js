import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, NavigatorIOS, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground } from 'react-native';

export default class NotificationScreenNude extends React.Component {
  render() {
    return (
      <ImageBackground source={{uri: 'bg_nude_motive'}} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Amazing Progress!</Text>
          <View style={styles.smallerContainer}>
            <Text style={styles.textBody}>This month you saved</Text>
            <Text style={styles.textTimeLimit}>[time saved]</Text>
          </View>
          <Text style={styles.textInfo}>
            Goals this month:
          </Text>
          <Text style={styles.textInfoGoals}>[insert goals]</Text>
          <Text style={styles.textInfoGoals}>[insert goals]</Text>
          <Text style={styles.textInfoGoals}>[insert goals]</Text>
          <TouchableHighlight
            style={styles.mainButton}
            // onPress={this.handleSetProfile.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonText}>SEE MY PROGRESS</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonClose}
            // onPress={this.handleBackToMain.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonTextNegative}>Close</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
  }

const styles = StyleSheet.create({
  textTitle: {
    marginHorizontal: "10%",
    marginTop: "10%",
    marginBottom: "5%",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  textBody: {
    marginTop: "3%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  textBodyBold: {
    marginHorizontal: "7%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  textTimeLimit: {
    color: "#C33330",
    textAlign: "center",
    marginTop: "3%",
    fontSize: 18,
    marginBottom: "5%",
  },
  textInfo: {
    marginTop: "3%",
    marginHorizontal: "7%",
    marginBottom: "3%",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },
  textInfoGoals: {
    marginTop: "3%",
    marginHorizontal: "7%",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
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
  mainButton: {
    marginTop: "7%",
    width: 250,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: '#011B22',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    marginTop: 15,
    marginHorizontal: "3%",
    fontSize: 16,
    fontWeight: "700"
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#011B22',
  },
  buttonClose: {
    width: 140,
    height: 40,
    marginRight: "42%",
    marginLeft: "42%"
    // backgroundColor: 'white',
  },
  buttonTextNegative: {
    color: '#011B22',
    margin: "8%",
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    minHeight: "38%",
    marginVertical: "45%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#BA8D7A',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
  },
  smallerContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    marginHorizontal: "7%",
    marginVertical: "5%",
    padding: "5%",
  },
  bgImage: {
    flex: 1
  },
});
