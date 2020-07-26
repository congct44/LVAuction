/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useEffect, Component} from 'react';
import {StyleSheet , Platform } from 'react-native';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Auction from './components/Auction';
import User from './components/User';
import {NavigationContainer} from '@react-navigation/native';
import Notification from './components/Notification';

import SplashScreen from 'react-native-splash-screen';


const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default class App extends Component  {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  render(){
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            style={{backgroundColor: 'tomato'}}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Auction"
              component={Auction}
              options={{
                tabBarLabel: 'Auction',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="gavel" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Notification"
              component={Notification}
              options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="bell" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="User"
              component={User}
              options={{
                tabBarLabel: 'User',
                tabBarIcon: ({color}) => (
                  <FontAwesome name="user" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );

  }

}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: '#d3d3d3',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 24,
  },
  arrow: {
    color: '#ef4771',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

