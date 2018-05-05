import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, TextInput, ActivityIndicatorIOS, ImageBackground, ListView, Keyboard, AsyncStorage } from 'react-native';
import OnboardingLimits from './onboardinglimits';
import OnboardingSetProfile from './onboardingsetprofile';
import GoalList from './goallist';
import Row from './row';

export default class OnboardingGoals extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      allComplete: false,
      value: '',
      items: [],
      dataSource: ds.cloneWithRows([])
    };
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.setSource = this.setSource.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }
  componentWillMount() {
    AsyncStorage.getItem('items').then((json) => {
      try {
        const items = JSON.parse(json);
        this.setSource(items, items);
      } catch(e) {

      }
    })
  }
  setSource(items, itemsDatasource, otherState = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    })
    AsyncStorage.setItem('items', JSON.stringify(items));
  }
  handleRemoveItem(key) {
    const newItems = this.state.items.filter((item) => {
      return item.key !== key
    })
    this.setSource(newItems, newItems);
  }
  handleToggleComplete(key, complete) {
    const newItems = this.state.items.map((item) => {
      if (item.key !== key) return item;
      return {
        ...item,
        complete
      }
    })
    this.setSource(newItems, newItems);
  }
  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }))
    this.setSource(newItems, newItems, {allComplete: complete})
  }
  handleAddItem() {
    if (!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]
    this.setSource(newItems, newItems, {value:''})
  }
  handleOnboardingLimits() {
    this.props.navigator.push({
      component: OnboardingLimits,
      navigationBarHidden: true,
    })
  }
  handleBackToSetProfile() {
    this.props.navigator.pop({
      component: OnboardingSetProfile,
      navigationBarHidden: true,
    })
  }
  render() {
    return (
      <ImageBackground source={{uri: 'bgLightBlueAlt'}} style={styles.bgImage}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textTitle}>Set 3 monthly goals</Text>
            <Text style={styles.textBody}>Goals are useful to keep a vision and get you back on track.</Text>
            <View>
              <GoalList
                value={this.state.value}
                onAddItem={this.handleAddItem}
                onChange={(value) => this.setState({value})}
              />
              <ListView
                style={styles.list}
                enableEmptySection
                dataSource={this.state.dataSource}
                onScroll={() => Keyboard.dismiss()}
                renderRow={({key, ...value}) => {
                  return (
                    <Row
                      key={key}
                      onRemove={() => this.handleRemoveItem(key)}
                      onComplete={(complete) => this.handleToggleComplete(key, complete)}
                      {...value}
                    />
                  )
                }}
                renderSeparator={(sectionId, rowId) => {
                  return <View key={rowId} style={styles.separator}/>
                }}
              />
            </View>
          </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.buttonBack}
            onPress={this.handleBackToSetProfile.bind(this)}
            underlayColor='white'>
            <Text style={styles.buttonTextNegative}>BACK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContinueSmall}
            onPress={this.handleOnboardingLimits.bind(this)}
            underlayColor='#023543'>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableHighlight>
        </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#011B22'
  },
  textNeutral: {
    marginTop: "5%",
    marginHorizontal: "10%",
    fontSize: 16,
    lineHeight: 26,
    color: '#A7A7A7'
  },
  addGoalText: {
    fontSize: 16,
    marginHorizontal: "5%",
    marginTop: "0.5%",
    color: '#011B22'
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
  addGoalButtonText: {
    alignSelf: "flex-end",
    marginHorizontal: "5%",
    marginTop: "5%"
  },
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginTop: "12%",
    marginLeft: "10%",
    borderBottomColor: '#011B22',
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 2,
    width: "80%",
    paddingBottom: "12%"
  },
  inputTextNewGoal: {
    marginTop: "5%",
  },
  goalListHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    margin: "8%",
    marginHorizontal: "3%",
    fontSize: 14,
    fontWeight: "700"
  },
  buttonContinueSmall: {
    width: 140,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#011B22',
  },
  buttonBack: {
    width: 140,
    height: 40,
    // backgroundColor: 'white',
  },
  buttonTextNegative: {
    color: '#011B22',
    margin: "8%"
  },
  underLine: {
    width: "80%",
    alignSelf: "center",
    marginVertical: "10%",
    borderBottomColor: '#011B22',
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: "12%",
    marginTop: "12%",
    marginHorizontal: "7%",
    borderRadius: 10,
    shadowColor: '#355C69',
    shadowOffset: { height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
  },
  buttonContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "center",
    marginBottom: "-12%",
  },
  inputField: {
    marginTop: 10,
    marginHorizontal: "10%",
    borderBottomColor: '#011B22',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    height: 30,
    fontSize: 16,
  },
  list: {
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1
  }
});
