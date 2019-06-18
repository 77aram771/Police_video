import React from 'react';
import { View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Container, Content, Form, Text, Input, Item, Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';

export default TutorialPage = ({ }) => {
    return (
        <ScrollView >
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View style={{ width: 100 + '%', alignItems: 'center' }}>
                    <Text style={Styles.title}>Tutorial page</Text>
                </View>
            </Container>
        </ScrollView>
    )
}