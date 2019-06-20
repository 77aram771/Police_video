import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image,
  View, TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Icon, Drawer } from 'native-base';

import { DrawerActions, NavigationActions, createStackNavigator } from 'react-navigation';
// import IOSIcon from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Profile from './Profile';
import Messages from './Messages';
import MyVideos from './MyVideos';
import Notification from './Notification';
import LegalDetails from './LegalDetails';
import Tutorial from './Tutorial'
import LanguageSelectionScreen from "../Components/LanguageSelectionScreen";
import SignUp from "./SignUp";



const StackNav = createStackNavigator({
  LanguageSelectionScreen: {
    screen: LanguageSelectionScreen,
    navigationOptions: { header: null }
  },
  ContentScreen: { screen: SignUp },
  Main: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'white', marginLeft: 30 }} />
        </TouchableOpacity>
      )
    })
  },

  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

  Myvideos: {
    screen: MyVideos,
    navigationOptions: ({ navigation }) => ({
      title: "My Videos",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

  Notification: {
    screen: Notification,
    navigationOptions: ({ navigation }) => ({
      title: "Notification",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

  LegalDetails: {
    screen: LegalDetails,
    navigationOptions: ({ navigation }) => ({
      title: "Legal Details",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

  Tutorial: {
    screen: Tutorial,
    navigationOptions: ({ navigation }) => ({
      title: "Tutorial",
      headerStyle: {
        backgroundColor: '#030b10',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    })
  },

});

export default StackNav;