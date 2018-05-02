import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground } from 'react-native';
import TabApp from './tabapp';

export default class Overview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}>You have [counter] hours left to live.</Text>
        <View style={styles.mainContainer}>
          <Text style={styles.counterStyle}>[time counter]</Text>
          <Text style={styles.textBody}>time on screen</Text>
          <ImageBackground source={{uri: 'overviewGraph'}} style={styles.bgImage}>
            <Text></Text>
          </ImageBackground>
          <Text style={styles.textTitleH2}>[counter] unlocks today</Text>
          <Text style={styles.textBody}>You have reached [%] of your time limit for today.</Text>
        </View>
        <TabBarIOS></TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textNeutral: {
    marginTop: "15%",
    color: '#797979',
    alignSelf: "center",
    fontSize: 14
  },
  textBody: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 24,
  },
  textInfo: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20
  },
  textTitleH2: {
    marginTop: "6%",
    marginHorizontal: "10%",
    fontSize: 18,
    fontWeight: "800",
  },
  counterStyle: {
    marginHorizontal: "10%",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: "12%",
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: "5%",
    height: "77.7%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    marginLeft: "10%",
    width: "90%",
    height: 165,
    alignSelf: "flex-end",
    marginVertical: "20%",
  },
});
