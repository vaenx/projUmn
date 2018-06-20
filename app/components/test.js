import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground, TouchableHighlight, Image, DeviceEventEmitter, NativeAppEventEmitter, AsyncStorage, Modal, NetInfo } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import FrontCamera from './frontcamera';


export default class Test extends React.Component {

  constructor(props){
    super(props); {
      this.state={
        elapsed_time: 0,
        timestamp: 0,
        modalVisible: false,
        online: false,
        timeLeft: '57',
      };

      this.timer = null;
      this.updateTimer = this.updateTimer.bind(this);
      this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
    }
  }

  computeAge (birthdate, reference_date) {
    console.log(birthdate);
    let years = reference_date.getFullYear() - birthdate.getFullYear();
    return `${years}y`
  }

  setModalVisible(visible) {
    if (this.state.online) {
      this.setState({
        modalVisible: visible
      });
    };

    let gender = this.props.gender;
    let country = this.props.country;
    let today = new Date(Date.now());
    let reference_date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDay()}`;
    let age = this.computeAge(new Date(this.props.birthdate), today);
    let api_base =
      'http://api.population.io/1.0/life-expectancy/remaining';
    let api_url =
      `${api_base}/${gender}/${country}/${reference_date}/${age}/`;

    console.log('fetch ' + api_url);

    fetch (api_url, {
      method: 'GET',
      mode: 'cors',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then (response => response.json())
    .then (data => console.log(data))
    .catch (error => console.log(error));

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

  handleConnectivityChange(connectionInfo) {
    if (connectionInfo.type === 'none') {
      this.setState({online: false});
    }
    else {
      this.setState({online: true});
    }
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
    console.log("profile:", this.props.profile);

    this.setState({
      elapsed_time,
      timestamp: Date.now()
    });

    this.timer = setInterval(this.updateTimer, 1000);

    NetInfo.isConnected.fetch().then(isConnected => this.setState({online: isConnected}) );
    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  async componentWillUnmount(){
    clearInterval(this.timer);
    await AsyncStorage.setItem('elapsed_time', this.state.elapsed_time.toString());
    console.log ("unmount component");
    BackgroundTimer.stop();

    NetInfo.removeListener('connectionChange', this.handleConnectivityChange);
  }

  render() {
    return (
      <ImageBackground source={{uri: 'bg_simpleUmn'}} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.textTopUmn}>UMN</Text>
          <TouchableHighlight
            style={styles.mainContainer}
            onLongPress={() => { this.setModalVisible(true); } }
            underlayColor="white">
            <View style={styles.counterContainer}>
              <Text style={styles.counterStyleNumbers}>{this.formatElapsedTime()}</Text>
              <Text style={styles.textInfo}>time on screen</Text>
              <Text style={styles.textInfo1}>Your online path is now visible.</Text>
              <Text style={styles.textNeutral1}>Long press and reflect</Text>
            </View>
          </TouchableHighlight>
            <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert('Modal has been closed.')}}>
              <FrontCamera timeLeft={this.state.timeLeft} />
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={styles.buttonContinueSmall}
                  onPress={() => {this.setModalVisible(false)}}>
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
  textNeutral1: {
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
    marginBottom: 60,
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
