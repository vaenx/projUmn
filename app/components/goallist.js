import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, TouchableOpacity, TextInput, ActivityIndicatorIOS, ImageBackground, Keyboard } from 'react-native';
import OnboardingLimits from './onboardinglimits';
import OnboardingSetProfile from './onboardingsetprofile';

export default class GoalList extends React.Component {
  render () {
    return (
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputField}
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="Insert new goal"
          blurOnSubmit={false}
          returnKeyType="done"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 10,
    marginHorizontal: "10%",
    flexDirection: "row",
    alignItems: "center"
  },
  inputField: {
    borderBottomColor: '#011B22',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    height: 30,
    fontSize: 16,
    width: "90%",
    marginLeft: "5%",
    marginBottom: "5%"
  },
  toggleIcon: {
    fontSize: 20,
    color:"#CCC"
  },
})
