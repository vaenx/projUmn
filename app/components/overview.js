import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View, Image } from 'react-native';
import TabApp from './tabapp';

export default class Overview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}>You have [counter] hours left to live.</Text>
        <View style={styles.mainContainer}>
          <ScrollView>
            <Text style={styles.counterStyle}>[time counter]</Text>
            <Text style={styles.textBody}>time on screen</Text>
            <Image />
            <View style={styles.underLine}/>
            <Text style={styles.textTitleH2}>[counter] unlocks today</Text>
            <Text style={styles.textBody}>You have reached [%] of your time limit for today.</Text>
          </ScrollView>
        </View>
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
  },
  container: {
    flex: 1,
    marginHorizontal: "10%",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: "5%",
    marginBottom: 100,
    width: "90%",
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
});
