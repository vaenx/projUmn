import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter, AsyncStorage } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import TabApp from './tabapp';
import TimeOfDeath from './timeofdeath';
import LockStateCheck from '../utils/lockstateCheck';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { elapsed_time: 0, timestamp: 0 };
    this.timer = null;
    this.updateTimer = this.updateTimer.bind(this);
  }

  handleTimeOfDeath() {
    this.props.navigator.replace({
      component: TimeOfDeath,
      navigationBarHidden: true,
    })
  }

  formatElapsedTime() {
    var ms = this.state.elapsed_time;

    var d, h, m, s;
      s = Math.floor(ms / 1000);
      m = Math.floor(s / 60);
      s = s % 60;
      h = Math.floor(m / 60);
      m = m % 60;
      d = Math.floor(h / 24);
      h = h % 24;

      return `${d}:${h}:${m}:${s}`;
  }

  updateTimer() {
    var now = Date.now();
    var time_diff = now - this.state.timestamp;
    var new_elapsed_time = this.state.elapsed_time + time_diff;
    this.setState({
      elapsed_time: new_elapsed_time,
      timestamp: now
     });
  }

  async componentDidMount(){
    BackgroundTimer.start();
    var elapsed_time = 0;
    try {
      elapsed_time = Number(await AsyncStorage.getItem('elapsed_time'));
    } catch (error) {
      console.log("storage error")
      await AsyncStorage.setItem('elapsed_time', elapsed_time.toString());
    }

    console.log("mount elapsed time:", elapsed_time);

    this.setState({
      elapsed_time,
      timestamp: Date.now()
    });

    this.timer = setInterval(this.updateTimer, 1000);
  }

  async componentWillUnmount(){
    clearInterval(this.timer);
    await AsyncStorage.setItem('elapsed_time', this.state.elapsed_time.toString());
    console.log ("unmount component");
    BackgroundTimer.stop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.textInfo1}>Your online path is now visible.</Text>
          <Text style={styles.counterStyle}></Text>
          <Text style={styles.counterStyleSmaller}>out of {this.formatElapsedTime()}</Text>
          <Text style={styles.textInfo}>time on screen</Text>
          <Text style={styles.counterStyleUnlock}>23<Text style={styles.textBody}>/90</Text></Text>
          <Text style={styles.textInfo}>unlocks</Text>
          <Image source={{uri: 'concentricPulseTODAlt'}} style={styles.bgImage}></Image>
          <View style={styles.containerButton}>
            <TouchableHighlight
              style={styles.buttonUmn}
              onLongPress={this.handleTimeOfDeath.bind(this)}
              underlayColor="white">
              <Image source={{uri: 'umnTODlogoMain'}} style={styles.bgImageButton}>
              </Image>
            </TouchableHighlight>
            <Text style={styles.textNeutral}>Press for Umn</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInfo1: {
    marginTop: "12%",
    alignSelf: "center",
    fontSize: 14
  },
  textNeutral: {
    marginTop: "3%",
    alignSelf: "center",
    fontSize: 12,
    color: "#A7A7A7",
  },
  textBody: {
    marginTop: "12%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  textInfo: {
    marginTop: "3%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    textAlign: "center"
  },
  textTitleH2: {
    marginTop: "6%",
    marginHorizontal: "10%",
    fontSize: 18,
    fontWeight: "800",
  },
  counterStyle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: "8%",
  },
  counterStyleSmaller: {
    textAlign: "center",
    fontSize: 18,
    marginTop: "3%",
  },
  counterStyleUnlock: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "1%",
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: "18%",
    height: "80.5%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerButton: {
    marginHorizontal: "12%",
    marginVertical: "5%",
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
  bgImage: {
    margin: "10%",
    alignSelf: "center",
    width: 250,
    height: 253,
    alignSelf: "center",
    alignContent: "center",
    marginVertical: "-5%",
  },
  buttonUmn: {
    marginTop: "12%",
    marginBottom: "3%",
  },
  bgImageButton: {
    width: 103,
    height: 36,
    alignSelf: "center",
  },
});
