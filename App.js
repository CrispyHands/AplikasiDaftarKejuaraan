import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './src/Home'
import EventsScreen from './src/Events';
import DetailsScreen from './src/Details';


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Events: {
      screen: EventsScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  } 
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
      );
    }
  }

