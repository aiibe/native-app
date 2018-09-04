import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

// Screens
import Latest from './Latest';
import Fresh from './Fresh'

// Tabs
const Tabs = createMaterialTopTabNavigator({
  Latest: Latest,
  Fresh: Fresh
},{
	tabBarOptions: {
		style: {
			backgroundColor: "#212121"
		},
		inactiveTintColor: "#e4e4e4",
		activeTintColor: "#fff",
		indicatorStyle: {
			opacity: 0.5,
			backgroundColor: "red"
		}
	}
})

export default Tabs