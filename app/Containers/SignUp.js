import React, { Component } from 'react';
import { Root, Header } from 'native-base';
import SignUpPage from '../Components/SignUpPage';


export default class SignUp extends Component {
  render() {
    return (
        <SignUpPage changeToLogIn={this.props.changeToLogIn}/>
    );
  }
}