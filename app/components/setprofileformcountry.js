import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, ScrollView, Button, View, TouchableHighlight, ActivityIndicatorIOS, ImageBackground, TextInput, DatePickerIOS, Picker } from 'react-native';

export default class SetProfileFormCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedValue: ''
    };
    this.countries = ['Portugal', 'Spain', 'Italy', 'Germany', 'UK', 'USA', 'Australia', 'France', 'Ireland', 'Andorra', 'Luxembourg', 'Austria', 'Switzerland', 'Denmark', 'Belgium', 'Russia', 'Bulgaria', 'Croatia'];
    this.updateCountry = this.updateCountry.bind(this);
    this.countryList = this.countryList.bind(this);
  }

  updateCountry(country) {
    this.setState({ selectedValue: country });
    this.props.updateCountryChoice(country);
  }

  componentDidMount() {
    this.updateCountry('Portugal');
  }

  countryList() {
    return this.countries.map((country_name) => {
       return <Picker.Item key={country_name} label={country_name} value={country_name} />
    });
  }

  render() {
    return(
      <View>
        <Text style={styles.textBody}>Select your Birth Country</Text>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{ marginTop: "5%", width: "100%" }}
          onValueChange={this.updateCountry}>
          { this.countryList() }
        </Picker>
      </View>
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
  bgImage: {
    flex: 1
  }
});
