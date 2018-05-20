import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter, AsyncStorage, Modal } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import FrontCamera from './frontcamera';


export default class Test extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
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
      <ImageBackground source={{uri: 'bg_simpleUmn'}} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.textTopUmn}>UMN</Text>
          <TouchableHighlight
            style={styles.mainContainer}
            onLongPress={() => {this.setModalVisible(true)}}
            underlayColor="white">
            <View style={styles.counterContainer}>
              <Text style={styles.counterStyleNumbers}>{this.formatElapsedTime()}</Text>
              <Text style={styles.textInfo}>time on screen</Text>
              <Text style={styles.textInfo1}>Your online path is now visible.</Text>
            </View>
          </TouchableHighlight>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert('Modal has been closed.')}}>
              <FrontCamera/>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={styles.buttonContinueSmall}
                  onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                  <Text style={styles.textBottomUmn}>BACK TO LIFE</Text>
                </TouchableHighlight>
              </View>
            </Modal>
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
  textBottomUmn: {
    alignSelf: "center",
    fontSize: 14,
    marginVertical: "5%",
    letterSpacing: 5,
    color: "white",
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
  buttonContinueSmall: {
    backgroundColor: "black",
    height: 30,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  buttonContainer: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "black",
  },
});
