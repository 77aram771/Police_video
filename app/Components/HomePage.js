import React from 'react';
import { View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Container, Content, Form, Text, Input, Item, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import SplashScreen from 'react-native-splash-screen'

export default HomePage = ({  }) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <TouchableOpacity style={IndexStyle.whiteBtn}>
                    <Text style={{ fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16 }}>start record</Text>
                </TouchableOpacity>
            </Container>
        </ScrollView>
    )
}