import React, {Component} from 'react';
import SignUpPage from '../Components/SignUpPage';
import {View, Text, StyleSheet} from 'react-native';
import stringsoflanguages from '../leng/stringsoflanguages';


export default class SignUp extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('Title', 'Default Title'),
        };
    };

    componentDidMount() {
        var that = this;
        var heading = '';
        if (this.props.navigation.state.params.JSON_Clicked_Item === 'en') {
            heading = 'Selected Language English';
        }
        else if (this.props.navigation.state.params.JSON_Clicked_Item === 'fr') {
            heading = 'Selected Language French';
        }
        that.props.navigation.setParams({
            Title: heading,
        });
    }

    render() {
        return (
            <View>
                <Text> {stringsoflanguages.first}</Text>
                <Text> {stringsoflanguages.second} </Text>
                <SignUpPage changeToLogIn={this.props.changeToLogIn}/>
            </View>

        );
    }
}