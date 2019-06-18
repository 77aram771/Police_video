import React from 'react';
import { View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Container, Content, Form, Text, Input, Item, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import { onResetPassword } from '../store/actions/users';

export default ResetPasswordPage = ({ inputChange, password, confirmPassword, onResetPassword }) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={{ width: 100 + '%', alignItems: 'center' }}>
                    <Text style={Styles.title}>Enter new password</Text>
                    <View style={{ width: 100 + '%' }}>
                        <Image source={require('../images/lock.png')} style={{ position: 'absolute', top: 12, left: 5 }} />
                        <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor="white" value={password} style={IndexStyle.input}
                            onChangeText={(text) => inputChange('password', text)} />
                    </View>
                    <View style={{ width: 100 + '%' }}>
                        <Image source={require('../images/lock.png')} style={{ position: 'absolute', top: 12, left: 5 }} />
                        <TextInput placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor="white" style={IndexStyle.input}
                            onChangeText={(text) => inputChange('confirmPassword', text)} value={confirmPassword} />
                    </View>
                    <TouchableOpacity style={IndexStyle.whiteBtn} onPress={() => onResetPassword()} >
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    )
}