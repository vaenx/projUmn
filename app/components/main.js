import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View } from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <Text style={styles.content}>Testing the Router</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 90+80,
    marginHorizontal: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
