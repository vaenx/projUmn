import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, Slider, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import Test from './test';
import { RNCamera } from 'react-native-camera';

export default class FrontCamera extends React.Component {

  render() {
    return (
      <View style={styles.bgContainer}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera'}>
        <View style={styles.container}>
          <Text style={styles.textBodyAlt1}>Your Umn time is limited</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.textDeathCounter}>{this.props.timeLeft}</Text>
              <Text style={styles.textBodyAlt}>years left to live</Text>
            </View>
          <View style={styles.yearsLeftContainer}>
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </RNCamera>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}


const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    minWidth: 100,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
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
  textBodyAlt1: {
    color: "white",
    marginTop: "10%",
    marginBottom: "20%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  textBodyAlt2: {
    color: "white",
    marginTop: "32%",
    marginBottom: "12%",
    fontSize: 16,
    lineHeight: 26,
  },
  textBodyAlt: {
    color: "white",
    marginTop: "3%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
  textDeathCounter: {
    color: "white",
    alignSelf: "center",
    fontSize: 80,
    fontWeight: "800",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "6%",
    fontSize: 16,
    fontWeight: "700"
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    marginBottom: "-20%",
    alignSelf: "center",
    backgroundColor: '#011B22',
  },
  bgContainerTODCounter: {
    width: 250,
    height: 283,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 10,
    marginLeft: "-40%",
    marginRight: "-40%",
    marginTop: "15%",
    height: 500,
    shadowColor: '#000000',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
    alignSelf: "center",
  },
  counterContainer: {
    alignContent: "center",
  },
  yearsLeftContainer: {
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
  },
  bgImageTODCounter: {
    marginVertical: "12%",
    height: "100%",
  },
});
