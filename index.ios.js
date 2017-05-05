import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, Transitioner } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello!!!</Text>
        <Button
          onPress={() => navigate('One')}
          title='Screen One'
        />
        <Button
          onPress={() => navigate('Two')}
          title='Screen Two'
        />
      </View>
    )
  }
}

class ScreenOne extends React.Component {
  static navigationOptions = {
    title: 'One'
  } 
  render() {
    return (
      <View>
        <Text>Screen 1</Text>
      </View>
    )
  }
}

class ScreenTwo extends React.Component {
  static navigationOptions = {
    title: 'Two'
  } 
  render() {
    return (
      <View>
        <Text>Screen 2</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  One: { screen: ScreenOne },
  Two: { screen: ScreenTwo }
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
