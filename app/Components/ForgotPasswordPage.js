import React from 'react';
import { View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Container, Content, Form, Text, Input, Item, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import SplashScreen from 'react-native-splash-screen'

export default ForgotPasswordPage = ({ onForgotPassword, inputChange,  email, changeToLogIn}) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={{ width: 100 + '%', alignItems: 'center' }}>
                    <Text style={Styles.title}>Enter your email address</Text>
                    <View style={{ width: 100 + '%', }}>
                        <Image source={require('../images/email1.png')} style={{ position: 'absolute', top: 15, left: 5 }} />
                        <TextInput placeholder="Email" placeholderTextColor="white" value={email} placeholderStyle={{ fontFamily: "MULI-REGULAR", fontSize: 17 }} style={IndexStyle.input}
                            onChangeText={(text) => inputChange('email', text)} />
                    </View>
                    <TouchableOpacity style={IndexStyle.whiteBtn} onPress={() => onForgotPassword()}>
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16 }}>Send</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginBottom: 5 + '%', marginTop: 20 + '%' }}>First time here?</Text>
                    <TouchableOpacity style={[IndexStyle.transparentBtn]} onPress={() => changeToLogIn()}>
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: 'white', fontSize: 16, }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    )
}