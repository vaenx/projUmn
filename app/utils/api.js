import React, { Component } from 'react';
import { Platform, StyleSheet, Text, NavigatorIOS, TabBarIOS, View, ImageBackground } from 'react-native';

// Example server, implemented in Rails: https://git.io/vKHKv
const LifeApi = 'http://api.population.io:80/1.0/life-expectancy/remaining/female/Portugal/1988-09-21/29y7m/';

export default class LifeExpectancyApi extends React.Component {

  return fetch(LifeApi, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
    }),
  });
});
