import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View, Image } from 'react-native';
import TabApp from './tabapp';

export default class Goals extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.textNeutral}>[hours] on screen today</Text>
          <View style={styles.mainContainer}>
            <ScrollView>
              <Text style={styles.counterStyle}>0
                <Text style={styles.counterStyleSmall}>/3</Text>
              </Text>
              <Text style={styles.textBody}>achieved goals</Text>
              <Text style={styles.textInfo}>Top time on screen: [timeonscreen]
              {"\n"}
              <Text style={styles.textInfo}>Top unlocks: [unlocks]</Text></Text>
              <Text style={styles.textBodySmallRight}>8h</Text>
              <View style={styles.underLine}/>
              <Image source={{uri: 'placeholderGoalsGraph'}}/>
              <View style={styles.underLine}/>
              <Text style={styles.textBodyRight}>total overtime
              <Text style={styles.textBodyBold}>[overtime]]</Text></Text>

            </ScrollView>
          </View>
        <Text style={styles.textNeutral}>You have [counter] hours left to live!</Text>
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
  textBody: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
  },
  textInfo: {
    marginTop: "5%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 24
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
    marginHorizontal: "10%",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: "5%",
    marginBottom: "7%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
