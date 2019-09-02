import React from 'react';
import {View, TouchableOpacity, TextInput, Image, Text, ScrollView, Dimensions, Alert, StyleSheet} from 'react-native'
import {Container, Content, Form, Input, Item, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";
import Video from "react-native-video";


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const deviceWidth = Dimensions.get("window").width;


export default class MyVideosPage extends React.Component {

    render() {
        return (

            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={styles.container}>

                </View>
            </Container>

        )
    }

}