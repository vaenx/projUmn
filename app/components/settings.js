import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, TabBarIOS, View, Switch } from 'react-native';
import TabApp from './tabapp';
import MainTimer from './maintimer';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}><MainTimer/></Text>
        <View style={styles.mainContainer}>
          <ScrollView>
            <Text style={styles.textTitleH2}>Settings</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.textReminder}>Send me limit reminders</Text>
              <Switch></Switch>
            </View>
            <View style={styles.underLine}/>
            <Text style={styles.textInfo}>About Umn</Text>
            <Text style={styles.textBodyAlt}>Most digital services feed on people’s attention and are therefore designed to have you spend more time there. From endless scrolling to addictive pull-down-to-refresh features, digital businesses use powerful persuasive design techniques to keep us hooked to our devices.{"\n"}
            Umn was carefully designed to make you more aware of your time and of how sometimes getting control back is more about reflection and self awareness than what we might think.</Text>
            <View style={styles.rowContainerContact}>
              <Text style={styles.textBodyRowAlt}>Contact dev</Text>
              <Text style={styles.textBodyNeutralRowAlt}>vilelavv@campus.ul.pt</Text>
            </View>
            <Text style={styles.textBodyAlt}>Umn® 2018</Text>
          </ScrollView>
        </View>
        <TabBarIOS></TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textNeutral: {
    marginTop: "15%",
    color: '#797979',
    alignSelf: "center",
    fontSize: 14
  },
  textTitleH2: {
    marginTop: "6%",
    marginHorizontal: "10%",
    fontSize: 18,
    fontWeight: "800",
  },
  textBody: {
    marginTop: "2%",
    fontSize: 16,
    lineHeight: 24,
  },
  textBodyAlt: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 14,
    lineHeight: 22,
  },
  textInfo: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20
  },
  counterStyle: {
    marginHorizontal: "10%",
    fontSize: 50,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginHorizontal: "6.5%",
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: "5%",
    marginBottom: 110,
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "10%",
    width: "80%",
    marginVertical: "1%",
    justifyContent: "space-between",
  },
  textBodyRow: {
    paddingTop: "1%",
    height:30,
    marginRight: "10%",
    fontSize: 16,
    textAlignVertical: "center",
  },
  textNeutralRow: {
    color: '#797979',
    fontSize: 14,
    marginBottom: "2%",
    marginTop: "1%",
  },
  underLine: {
    width: "80%",
    marginVertical: "3%",
    alignSelf: "center",
    borderBottomColor: '#011B22',
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 3,
  },
  rowContainerContact: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "10%",
    marginTop: "5%",
    width: "80%",
    marginVertical: "1%",
    justifyContent: "space-between",
  },
  textBodyRowAlt: {
    paddingTop: "1%",
    height: 30,
    fontSize: 14,
    textAlignVertical: "center",
  },
  textBodyNeutralRowAlt: {
    paddingTop: "1%",
    height:30,
    fontSize: 14,
    textAlignVertical: "center",
    color: '#797979',
  },
  switchContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
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
