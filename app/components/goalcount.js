import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, TouchableOpacity, TextInput, ActivityIndicatorIOS, ImageBackground, Keyboard } from 'react-native';

export default class GoalCount extends React.Component {
  render() {
    const { filter } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.counterStyle}>{this.props.countComplete}
          <Text style={styles.counterStyleSmall}>/{this.props.countAll}
          </Text>
        </Text>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === "ALL" && styles.selected]} onPress={() => this.props.onFilter("ALL")}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === "ACTIVE" && styles.selected]} onPress={() => this.props.onFilter("ACTIVE")}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === "COMPLETED" && styles.selected]} onPress={() => this.props.onFilter("COMPLETED")}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  counterStyle: {
    marginHorizontal: "10%",
    fontSize: 50,
    fontWeight: "bold",
  },
  counterStyleSmall: {
    fontSize: 28,
    fontWeight: "400",
  },
  selected: {
    borderColor: "rgba(175, 47, 47, .2)"
  }
})
