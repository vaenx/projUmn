import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

export default class Row extends React.Component {
  render() {
    const { complete } = this.props;
    return (
      <View style={styles.innerContainer}>
        <Switch
          value={complete}
          onValueChange={this.props.onComplete}
        />
        <View style={styles.textWrap}>
          <Text style={[styles.goalListed, complete && styles.textComplete]}>{this.props.text}</Text>
        </View>
        <TouchableOpacity
          onPress={this.props.onRemove}>
          <Text style={styles.destroy}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 10,
    marginHorizontal: "10%",
    flexDirection: "row",
    alignItems: "center"
  },
  goalListed: {
    fontSize: 16,
    width: "90%",
    marginLeft: "5%",
    marginTop: "2%",
    marginVertical: "2%"
  },
  textComplete: {
    textDecorationLine: "line-through",
    color: '#A7A7A7'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: "2%",
  },
  destroy: {
    fontSize: 14,
    color: "#011B22"
  },
})
