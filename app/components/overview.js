import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, View } from 'react-native';

export default class Overview extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>Testing the Router, this is the Overview screen.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 90+80,
    marginHorizontal: 50,
  },
});
