import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View, Image, TouchableHighlight } from 'react-native';
import TabApp from './tabapp';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
  }
  handleAddNewGoal() {

  }
  handleCheckThisGoal() {

  }
  handleRemoveThisGoal() {

  }
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
            <Text style={styles.textBodyBold}>[overtime]]</Text>{"\n"}</Text>
            <Text style={styles.textInfo}>Make sure you do not overcome your limits and use saved time to accomplish your personal goals.</Text>
            <View style={styles.goalListContainer}>
              <TouchableHighlight
                style={styles.buttonCheckGoal}
                onPress={this.handleCheckThisGoal.bind(this)}
                underlayColor='white'>
                <Text style={styles.buttonAddGoalText}></Text>
              </TouchableHighlight>
              <Text style={styles.textGoal}>Start a personal project.</Text>
              <TouchableHighlight
                style={styles.buttonRemove}
                onPress={this.handleRemoveThisGoal.bind(this)}
                underlayColor='white'>
              <Text style={styles.textNeutral}>Remove.</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.goalListContainer}>
              <TouchableHighlight
                style={styles.buttonCheckGoal}
                onPress={this.handleCheckThisGoal.bind(this)}
                underlayColor='white'>
                <Text style={styles.buttonAddGoalText}></Text>
              </TouchableHighlight>
              <Text style={styles.textGoal}>Organize holidays.</Text>
            </View>
            <View style={styles.goalListContainer}>
              <TouchableHighlight
                style={styles.buttonCheckGoal}
                onPress={this.handleCheckThisGoal.bind(this)}
                underlayColor='white'>
                <Text style={styles.buttonAddGoalText}></Text>
              </TouchableHighlight>
              <Text style={styles.textGoal}>Read a book.</Text>
            </View>
            <View style={styles.addGoalContainer}>
              <TouchableHighlight
                style={styles.buttonAddGoal}
                onPress={this.handleAddNewGoal.bind(this)}
                underlayColor='#023543'>
                <Text style={styles.buttonAddGoalText}>+</Text>
              </TouchableHighlight>
              <Text style={styles.addGoalText}>Add new goal</Text>
            </View>
            <Text style={styles.textInfo}>Set personal goals to make your time count and help you focus on what matters most for your life.</Text>
          </ScrollView>
        </View>
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
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 14,
    lineHeight: 20
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
  textGoal: {
    fontSize: 14,
    marginHorizontal: "5%",
    marginBottom: "-10%",
    color: '#011B22',
    textAlignVertical: "center",
    paddingTop: "1.5%"
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
    marginBottom: 100,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginTop: "5%",
    marginLeft: "10%",
    borderBottomColor: "white",
    borderTopColor: '#011B22',
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 2,
    width: "80%",
    paddingTop: "5%",
    paddingBottom: "2%"
  },
  goalListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginLeft: "10%",
    width: "80%",
    paddingTop: "3%",
    paddingBottom: "3%"
  },
  buttonCheckGoal: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderColor: '#011B22',
    borderWidth: 2,
  },
  buttonAddGoal: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#011B22',
  },
  buttonAddGoalText: {
    color: '#FFFFFF',
    margin: "8%",
    fontSize: 16,
    alignSelf: 'center'
  },
  addGoalText: {
    fontSize: 16,
    marginHorizontal: "5%",
    marginBottom: "-10%",
    color: '#011B22',
    textAlignVertical: "center",
    paddingTop: "1%"
  },
});
