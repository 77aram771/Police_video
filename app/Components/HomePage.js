import React from 'react';
import {View, TouchableOpacity, TextInput, Image, ScrollView, Platform} from 'react-native'
import {Container, Content, Form, Text, Input, Item, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";
import Video from "react-native-video";
import image from "../images/edit.png";
import {connect} from 'react-redux';

import * as actions from '../store/actions/video-action';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null,
            image: image,

        }
    }

    render() {
        console.log('this.props', this.props)
        const {StartRecord} = stringsoflanguages;
        return (

            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']}
                                style={IndexStyle.gradient}>
                </LinearGradient>
                <TouchableOpacity
                    style={IndexStyle.whiteBtn2}
                    onPress={() => this.props.nav.navigation.navigate("PlayScreen")}
                >
                    <Text style={{fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16}}>
                        {StartRecord}
                    </Text>
                </TouchableOpacity>
            </Container>

        )
    }
}

const mstp = (store) => ({
    video: store.video,
});

const mdtp = {
    ...actions,
};

export default connect(mstp, mdtp)(HomePage);