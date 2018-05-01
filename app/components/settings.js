import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View } from 'react-native';
import TabApp from './tabapp';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}>You have [counter] hours left to live!</Text>
        <View style={styles.mainContainer}>
          <ScrollView>
          <Text style={styles.counterStyle}></Text>
          </ScrollView>
        </View>
        <Text style={styles.textNeutral}>You have [counter] hours left to live!</Text>
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
    marginBottom: "7%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
