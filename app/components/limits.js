import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View, TouchableHighlight, TabBarIOS, ActivityIndicatorIOS, Slider, Switch } from 'react-native';
import TabApp from './tabapp';

export default class Limits extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      maxHours: 8,
      maxUnlocks: 300,
    }
    this.setState = this.setState.bind(this);
  }
  onValueChangeTime(valueTime) {
    this.props.value({
      valueTime: '',
    })
  }
  onValueChangeUnlocks(valueUnlocks) {
    this.props.value({
      valueUnlocks: '',
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}>[hours] on screen today</Text>
        <View style={styles.mainContainer}>
          <ScrollView>
            <Text style={styles.counterStyle}>30m</Text>
            <Text style={styles.textBody}>time saved this week</Text>
            <Text style={styles.textInfo}>Time saved is a weekly calculation based on your time limit set.</Text>
            <View style={styles.underLine}/>
            <Text style={styles.textTitleH2}>Set Time Limits</Text>
            <Text style={styles.textSlider}>Time on screen</Text>
            <Text style={styles.textDailyLimit}>Your daily limit: {this.state.onValueChangeTime}</Text>
            <Slider
              style={styles.timeOnScreenSlider}
              maximumValue={this.state.maxHours}
              onValueChange={this.state.onValueChangeTime}
              step={1} />
            <Text style={styles.textSliderLabel}>Recommended: 3h</Text>
            <Text style={styles.textSlider}>Phone Unlocks</Text>
            <Text style={styles.textDailyLimit}>Your daily limit: {this.state.onValueChangeUnlocks}</Text>
            <Slider
              style={styles.timeOnScreenSlider}
              maximumValue={this.state.maxUnlocks}
              thumbTintColor='#023543'
              step={10} />
            <Text style={styles.textSliderLabel}>Recommended: 90 unlocks</Text>
            <Text style={styles.textInfoAlert}>Make sure notifications are on to receive a reminder when your time limit is exceeded.</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.textReminder}>Send me limit reminders</Text>
              <Switch></Switch>
            </View>
          </ScrollView>
        </View>
        <TabBarIOS></TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitleH2: {
    marginTop: "6%",
    marginHorizontal: "10%",
    fontSize: 18,
    fontWeight: "800",
  },
  textSlider: {
    marginTop: "5%",
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
    marginTop: "5%",
  },
  textNeutral: {
    marginTop: "15%",
    color: '#797979',
    alignSelf: "center",
    fontSize: 14
  },
  textBody: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
  },
  textInfo: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20
  },
  textInfoAlt: {
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20,
    alignSelf: "flex-start",
  },
  textInfoAlert: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20,
    color: '#C33330'
  },
  textBodyBold: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  textBodyRight: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
    textAlign: "right",
  },
  textBodySmallRight: {
    marginTop: "5%",
    marginBottom: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
    flexDirection: "row",
    textAlign: "right",
    width: "80%",
  },
  counterStyle: {
    marginHorizontal: "10%",
    fontSize: 50,
    fontWeight: "bold",
  },
  counterStyleSmall: {
    fontSize: 28,
    fontWeight: "400",
  },
  underLine: {
    width: "80%",
    alignSelf: "center",
    borderBottomColor: '#011B22',
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 3,
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: "5%",
    marginBottom: 140,
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  switchContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "10%",
    width: "80%",
    justifyContent: "space-between",
  },
  textReminder: {
    paddingTop: "2.8%",
    height:30,
    marginRight: "10%",
  },
});
