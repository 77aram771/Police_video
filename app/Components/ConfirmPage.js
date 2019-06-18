import React from 'react';
import { View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Container, Content, Form, Text, Input, Item, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';

export default ConfirmPage = ({ inputChange, code, onConfirmCode }) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={{ width: 100 + '%', alignItems: 'center' }}>
                    <Text style={Styles.title}>Enter confirmation code</Text>
                    <View style={{ width: 100 + '%', }}>
                        <TextInput placeholder="code" placeholderTextColor="white" value={code} placeholderStyle={{ fontFamily: "MULI-REGULAR", fontSize: 17 }} style={[IndexStyle.input, {paddingLeft: 0}]}
                            onChangeText={(text) => inputChange('code', text)} />
                    </View>
                    <TouchableOpacity style={IndexStyle.whiteBtn} onPress={() => onConfirmCode()}>
                        <Text style={{ fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    )
}