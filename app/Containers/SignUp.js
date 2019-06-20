import React, {Component} from 'react';
import SignUpPage from '../Components/SignUpPage';
import {View, Text, StyleSheet} from 'react-native';
import stringsoflanguages from '../leng/stringsoflanguages';


export default class SignUp extends Component {

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
                <Text style={styles.text}> {stringsoflanguages.first}</Text>
                <Text style={styles.text}> {stringsoflanguages.second} </Text>
                {/*<SignUpPage changeToLogIn={this.props.changeToLogIn}/>*/}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    }
})