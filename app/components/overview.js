import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import TabApp from './tabapp';
import TimeOfDeath from './timeofdeath';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTimeOfDeath() {
    this.props.navigator.replace({
      component: TimeOfDeath,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.textInfo1}>Your online path is now visible.</Text>
          <Text style={styles.counterStyle}>00h23m</Text>
          <Text style={styles.counterStyleSmaller}>out of 02h30m</Text>
          <Text style={styles.textInfo}>time on screen</Text>
          <Text style={styles.counterStyleUnlock}>23<Text style={styles.textBody}>/90</Text></Text>
          <Text style={styles.textInfo}>unlocks</Text>
          <Image source={{uri: 'concentricPulseTODAlt'}} style={styles.bgImage}></Image>
          <View style={styles.containerButton}>
            <TouchableHighlight
              style={styles.buttonUmn}
              onLongPress={this.handleTimeOfDeath.bind(this)}
              underlayColor="white">
              <Image source={{uri: 'umnTODlogoMain'}} style={styles.bgImageButton}>
              </Image>
            </TouchableHighlight>
            <Text style={styles.textNeutral}>Press for Umn</Text>
          </View>
        </View>
        <TabBarIOS></TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInfo1: {
    marginTop: "12%",
    alignSelf: "center",
    fontSize: 14
  },
  textNeutral: {
    marginTop: "3%",
    alignSelf: "center",
    fontSize: 12,
    color: "#A7A7A7",
  },
  textBody: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  textInfo: {
    marginTop: "3%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    textAlign: "center"
  },
  textTitleH2: {
    marginTop: "6%",
    marginHorizontal: "10%",
    fontSize: 18,
    fontWeight: "800",
  },
  counterStyle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: "8%",
  },
  counterStyleSmaller: {
    textAlign: "center",
    fontSize: 18,
    marginTop: "3%",
  },
  counterStyleUnlock: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "1%",
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: "18%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerButton: {
    marginHorizontal: "12%",
    marginVertical: "5%",
  },
  underLine: {
    width: "80%",
    alignSelf: "center",
    borderBottomColor: '#011B22',
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 3,
  },
  bgImage: {
    margin: "10%",
    alignSelf: "center",
    width: 250,
    height: 283,
    alignSelf: "center",
    alignContent: "center",
    marginVertical: "-5%",
  },
  buttonUmn: {
    marginTop: "12%",
    marginBottom: "3%",
  },
  bgImageButton: {
    width: 103,
    height: 36,
    alignSelf: "center",
  },
});
