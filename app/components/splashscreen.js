import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter } from 'react-native';


export default class SplashScreenUmn extends React.Component {

  render() {
    return (
        <ImageBackground source={{uri: 'splashScreenUmn'}} style={styles.bgImage}>
        <View><Text></Text></View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
});
