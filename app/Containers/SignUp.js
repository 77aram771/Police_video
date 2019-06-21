import React, {Component} from 'react';
import SignUpPage from '../Components/SignUpPage';
import {View, Text, StyleSheet} from 'react-native';
import stringsoflanguages from '../leng/stringsoflanguages';


export default class SignUp extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
            swipeEnabled: false
        }
    };


    render() {
        return (
            <View>
                <SignUpPage changeToLogIn={this.props.changeToLogIn}/>
            </View>

        );
    }
}
