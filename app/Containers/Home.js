import React, { Component } from 'react';
import { Root, Header, Text } from 'native-base';
import LoginPage from '../Components/LoginPage';
import LinearGradient from 'react-native-linear-gradient';
import IndexStyle from '../styles/indexStyle';
import HomePage from '../Components/HomePage'


export default class Home extends Component {
  render() {
    return (
      <HomePage/>
    );
  }
}