import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, View, TabBarIOS, ImageBackground, Image, TouchableHighlight, ListView, Keyboard, AsyncStorage, TextInput } from 'react-native';
import TabApp from './tabapp';
import GoalList from './goallist';
import Row from './row';
import GoalCount from './goalcount';
import MainTimer from './maintimer';

const filterItems = (filter, items) => {
  return items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return item.complete;
    if (filter === "ACTIVE") return !item.complete;
  })
}
export default class Goals extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      allComplete: false,
      filter: "ALL",
      value: '',
      items: [],
      dataSource: ds.cloneWithRows([])
    };
    this.handleFilter = this.handleFilter.bind(this);
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
  handleFilter(filter) {
    this.setSource(this.state.items, filterItems(filter, this.state.items), { filter })
  }
  handleRemoveItem(key) {
    const newItems = this.state.items.filter((item) => {
      return item.key !== key
    })
    this.setSource(newItems, filterItems(this.state.filter, newItems));
  }
  handleToggleComplete(key, complete) {
    const newItems = this.state.items.map((item) => {
      if (item.key !== key) return item;
      return {
        ...item,
        complete
      }
    })
    this.setSource(newItems, filterItems(this.state.filter, newItems));
  }
  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }))
    this.setSource(newItems, filterItems(this.state.filter, newItems), {allComplete: complete})
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
    this.setSource(newItems, filterItems(this.state.filter, newItems), {value:''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNeutral}><MainTimer/></Text>
        <View style={styles.mainContainer}>
          <ScrollView>
            <GoalCount
              countComplete={filterItems("COMPLETED", this.state.items).length}
              countAll={filterItems("ALL", this.state.items).length}
              onFilter={this.handleFilter}
              filter={this.state.filter}
            />
            <Text style={styles.textBody}>achieved goals</Text>
            <View>
            <Text style={styles.textInfo22}>Set personal goals to make your time count and help you focus on what matters most for your life.</Text>
              <GoalList
                value={this.state.value}
                onAddItem={this.handleAddItem}
                onChange={(value) => this.setState({value})}
                onToggleAllComplete={this.handleToggleAllComplete}/>
              <ListView
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
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
            <Text style={styles.textBody}> </Text>
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
  textBody: {
    marginTop: "2%",
    marginHorizontal: "10%",
    fontSize: 16,
  },
  textInfo: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 16,
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
  textInfo22: {
    marginTop: "6%",
    marginHorizontal: "10%",
    marginBottom: "5%",
    fontSize: 16,
    lineHeight: 20
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
  bgImage: {
    width: "80%",
    height: 165,
    alignSelf: "flex-end",
    marginVertical: "20%",
    marginHorizontal: "10%",
  },
});
