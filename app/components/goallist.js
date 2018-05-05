import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, TouchableOpacity, TextInput, ActivityIndicatorIOS, ImageBackground, Keyboard } from 'react-native';

export default class GoalList extends React.Component {
  render () {
    return (
      <View style={styles.innerContainer}>
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
    width: "100%",
    marginVertical: "5%"
  },
  toggleIcon: {
    fontSize: 20,
    color:"#CCC"
  },
})
