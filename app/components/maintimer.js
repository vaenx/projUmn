import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter, AsyncStorage } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export default class MainTimer extends React.Component {
  constructor(props){
    super(props); {
      this.state = { elapsed_time: 0, timestamp: 0 };
      this.timer = null;
      this.updateTimer = this.updateTimer.bind(this);
    }
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
      <View>
        <Text>{this.formatElapsedTime()}</Text>
      </View>
    )
  }
}
