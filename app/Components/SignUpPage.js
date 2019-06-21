import React from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import { Container, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";

export default SignUpPage = ({ changeToLogIn, inputChange, password, email, confirmPassword, userName, onSignUp }) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>

                <View style={{ width: 100 + '%', alignItems: 'center' }}>
                    <Text style={Styles.title}>{stringsoflanguages.SignUp}</Text>
                    <View style={{ width: 100 + '%' }}>
                        <Image source={require('../images/username.png')} style={{ position: 'absolute', top: 15, left: 5 }} />
                        <TextInput placeholder="Username" placeholderTextColor="white" value={userName} placeholderStyle={{ fontFamily: "MULI-REGULAR", fontSize: 17 }} style={IndexStyle.input}
                            onChangeText={(text) => inputChange('userName', text)} />
                    </View>
                    <View style={{ width: 100 + '%' }}>
                        <Image source={require('../images/email1.png')} style={{ position: 'absolute', top: 15, left: 5 }} />
                        <TextInput placeholder="Email" placeholderTextColor="white" value={email} style={IndexStyle.input}
                            onChangeText={(text) => inputChange('email', text)} />
                    </View>
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
                    <TouchableOpacity style={[IndexStyle.whiteBtn, { marginTop: 30 }]} onPress={()=> onSignUp()}>
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16 }}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginBottom: 5 + '%', marginTop: 10 + '%' }}>Already have an account?</Text>
                    <TouchableOpacity style={[IndexStyle.transparentBtn]} onPress={() => changeToLogIn()}>
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: 'white', fontSize: 16, }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    )
}