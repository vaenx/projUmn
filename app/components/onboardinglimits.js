import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
import Overview from './overview';

export default class OnboardingLimits extends React.Component {
  constructor(props) {
    super(props);
  }
  handleToOverview() {
    this.props.navigator.push({
      component: Overview,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={styles.textTitle}>Set time limits</Text>
          <Text style={styles.textBody}>insert time limit bars</Text>
        </ScrollView>
        <TouchableHighlight
          style={styles.buttonContinueSmall}
          onPress={this.handleToOverview.bind(this)}
          underlayColor='#023543'>
          <Text style={styles.buttonText}>FINISH</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    lineHeight: 26,
  },
  textBody: {
    marginTop: "12%",
    fontSize: 16,
    lineHeight: 26,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "8%",
    fontSize: 14,
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    marginBottom: "-22%",
    marginRight: "10%",
    alignSelf: "flex-end",
    backgroundColor: '#011B22',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: "12%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
