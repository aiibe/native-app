import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// Components
import Logo from './src/components/svg/Logo';

// Screens
import PostScreen from './src/screens/PostScreen';
import Tabs from './src/components/Tabs';
import LoginScreen from './src/screens/LoginScreen';


const Navigator = createStackNavigator({
  Home: {
    screen:Tabs,
    navigationOptions: {
      headerTitle: <Logo style={{ flex: 1, alignItems: 'center'}}/>,
      headerStyle: {backgroundColor: "#212121"},
      headerLeft: (<View></View>), 
      headerRight: (<View></View>)
    }
  },
  Post: PostScreen,
  Login: LoginScreen
})

export default Navigator