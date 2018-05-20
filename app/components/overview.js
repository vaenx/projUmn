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
    this.handleTimeOfDeath = this.handleTimeOfDeath.bind(this);
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

      return `${h ? (h > 9 ? h : "0" + h) : "00"}h ${m ? (m > 9 ? m : "0" + m): "00"}m ${s > 9 ? s : "0" + s}s `;
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
      <ImageBackground source={{uri: 'bg_simpleUmn'}} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.textTopUmn}>UMN</Text>
            <TouchableHighlight
              style={styles.mainContainer}
              onLongPress={this.handleTimeOfDeath.bind(this)}
              underlayColor="white">
              <View style={styles.counterContainer}>
                <Text style={styles.counterStyleNumbers}>{this.formatElapsedTime()}</Text>
                <Text style={styles.textInfo}>time on screen</Text>
                <Text style={styles.textInfo1}>Your online path is now visible.</Text>
              </View>
            </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textTopUmn: {
    alignSelf: "center",
    fontSize: 14,
    marginTop: "15%",
    letterSpacing: 5,
  },
  textInfo1: {
    marginTop: "5%",
    fontSize: 14
  },
  textNeutral: {
    marginTop: "3%",
    alignSelf: "center",
    fontSize: 12,
    color: "#A7A7A7",
  },
  textInfo: {
    marginTop: "3%",
    marginBottom: "5%",
    fontSize: 14,
    textAlign: "center"
  },
  counterStyleNumbers: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
  },
  counterStyleLetters: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginTop: "20%",
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: "100%",
    marginTop: "5%",
    marginBottom: 100,
    maxHeight: 667,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  counterContainer: {
    justifyContent: "flex-end",
    marginBottom: "2%",
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
    flex: 1,
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
