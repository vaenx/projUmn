import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View, Switch } from 'react-native';
import LockStateCheck from '../utils/lockstateCheck';


export default class Test extends React.Component {
  render() {
    return (
      <LockStateCheck>
      <View style={styles.container}>
        <Text style={styles.textBody}>This is a test screen</Text>
      </View>
      </LockStateCheck>
    );
  }
}

const styles = StyleSheet.create({
  textBody: {
    marginTop: "50%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 24,
  },
});
