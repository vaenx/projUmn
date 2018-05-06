import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput, DatePickerIOS, Picker, Slider } from 'react-native';

export default class TimeOnScreenLimit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timelimit: 0,
    };
  }

  change(timelimit) {
    this.setState(() => {
      return {
        timelimit: parseFloat(timelimit),
      };
    });
  }

  render() {
    const {timelimit} = this.state;
    return (
      <View>
        <Text style={styles.textDailyLimit}>Daily limit: {String(timelimit)}h</Text>
        <Slider
          style={styles.timeOnScreenSlider}
          step={1}
          maximumValue={8}
          onValueChange={this.change.bind(this)}
          timelimit={timelimit} />
        <Text style={styles.textSliderLabel}>Challenge: 2 hours</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: "5%",
    marginHorizontal: "10%",
    fontSize: 22,
    lineHeight: 28,
    fontWeight:'bold'
  },
  textBody: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
  },
  textSlider: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 18,
  },
  textSliderLabel: {
    marginTop: "3%",
    marginHorizontal: "10%",
    color: '#797979',
    fontSize: 14
  },
  textDailyLimit: {
    marginTop: "5%",
    marginRight: "10%",
    color: '#011B22',
    fontSize: 14,
    alignSelf: "flex-end"
  },
  timeOnScreenSlider: {
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "8%",
    marginHorizontal: "3%",
    fontSize: 14,
    fontWeight: "700"
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#011B22',
  },
  buttonBack: {
    width: 140,
    height: 40,
    // backgroundColor: 'white',
  },
  buttonTextNegative: {
    color: '#011B22',
    margin: "8%"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: "12%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#355C69',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
  },
  buttonContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "center",
    marginBottom: "-12%",
  },
  bgImage: {
    flex: 1
  }
});
