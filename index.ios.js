/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
          onPress={() => navigate('Chat')}
          title='Chat with Lucy'
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy'
  } 
  render() {
    return (
      <View>
        <Text>Chat with Lucy!</Text>
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
