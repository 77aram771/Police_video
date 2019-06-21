import React from 'react';
import {View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import {Container, Content, Form, Text, Input, Item, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";

export default LoginPage = ({changeToSignUp, inputChange, password, email, onLogin, changeToReset}) => {
    const {SignUp, ForgotPassword, LogIn, FirstTimeHere, Password} = stringsoflanguages;
    return (
        <ScrollView keyboardShouldPersistTaps='always'
                    keyboardDismissMode={'interactive'}>
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={{width: 100 + '%', alignItems: 'center'}}>
                    <Text style={Styles.title}>{SignUp}</Text>
                    <View style={{width: 100 + '%',}}>
                        <Image source={require('../images/email1.png')}
                               style={{position: 'absolute', top: 15, left: 5}}/>
                        <TextInput placeholder="Email" placeholderTextColor="white" value={email}
                                   placeholderStyle={{fontFamily: "MULI-REGULAR", fontSize: 17}}
                                   style={IndexStyle.input}
                                   onChangeText={(text) => inputChange('email', text)}/>
                    </View>
                    <View style={{width: 100 + '%'}}>
                        <Image source={require('../images/lock.png')} style={{position: 'absolute', top: 12, left: 5}}/>
                        <TextInput placeholder={Password} secureTextEntry={true} placeholderTextColor="white"
                                   value={password} style={IndexStyle.input}
                                   onChangeText={(text) => inputChange('password', text)}/>
                    </View>
                    <Text style={{color: 'white', alignSelf: 'flex-end', marginBottom: 10 + '%'}}
                          onPress={() => changeToReset()}>{ForgotPassword}</Text>
                    <TouchableOpacity style={IndexStyle.whiteBtn} onPress={() => onLogin()}>
                        <Text style={{
                            fontFamily: 'Arial-BoldMT',
                            color: '#bc1d23',
                            fontSize: 16
                        }}>{LogIn}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        marginBottom: 5 + '%',
                        marginTop: 20 + '%'
                    }}>{FirstTimeHere}</Text>
                    <TouchableOpacity style={[IndexStyle.transparentBtn]} onPress={() => changeToSignUp()}>
                        <Text style={{
                            fontFamily: 'Arial-BoldMT',
                            color: 'white',
                            fontSize: 16,
                        }}>{SignUp}</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    )
}