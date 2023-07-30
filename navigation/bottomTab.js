import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Pending from '../screens/Pending';
import Profile from '../screens/Profile';
import AddProb from '../screens/AddProb';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
        <Tab.Navigator initialRouteName='Home' 
        barStyle={{paddingBottom:10,backgroundColor:'blue'}}
        activeColor='red'
        inactiveColor='gray'
       
        >
        <Tab.Screen name="Home" component={Home} options={{tabBarColor:'pink',tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),}}/>
        <Tab.Screen name="Add" component={AddProb} options={{tabBarColor:'orange',tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),}} />
        <Tab.Screen name="Pending" component={Pending} options={{tabBarColor:'yellow',tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarColor:'purple',tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),}}/>
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
