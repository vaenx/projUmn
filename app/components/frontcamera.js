import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, Slider, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TouchableOpacity } from 'react-native';
import Overview from './overview';
import { RNCamera } from 'react-native-camera';

export default class FrontCamera extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
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
    marginTop: "20%",
    marginBottom: "26%",
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
    fontSize: 50,
    fontWeight: "800",
    marginTop: "8%",
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
    backgroundColor: "#284950",
    marginVertical: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
  },
  counterContainer: {
    alignContent: "center",
    marginVertical: "32%",
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
