import React, {useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Image, ScrollView, Platform} from 'react-native'
import {Container, Content, Form, Text, Input, Item, Body} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";
import axios from 'axios';
import Video from "react-native-video";
import image from "../images/edit.png";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null,
            image: image
        }
    }

    fileUpload(file) {
        return console.log(file);
        var formData = new FormData();
        formData.append(file);
        console.log(formData);
        axios.post('http://192.168.2.140:3637/uploadfile',  {'myFile':formData})
        .then(function (response) {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }


    pickSingleWithCamera(cropping, mediaType = 'photo') {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        }).then(video => {
            // console.log('received image', image);
            this.setState({
                video: {uri: video.path, width: video.width, height: video.height, mime: video.mime},
                images: null
            });
            this.fileUpload(this.state.video)
        }).catch(e => alert(e));
    }

    renderAsset(video) {
        if (video.mime && video.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(video);
        }
        this.fileUpload(this.state.video)
    }

    renderVideo(video) {
        console.log('rendering video');
        console.log('video', video);
        this.fileUpload(this.state.video)

        return (<View style={{height: 300, width: 300}}>
            <Video source={{uri: video.uri, type: video.mime}}
                   style={{
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       bottom: 0,
                       right: 0
                   }}
                   rate={1}
                   paused={false}
                   volume={1}
                   muted={false}
                   resizeMode={'cover'}
                   onError={e => console.log(e)}
                   onLoad={load => console.log(load)}
                   repeat={true}/>
        </View>);

    }

    render() {
        return (
            <ScrollView>
                <Container style={Styles.LoginBlock}>
                    <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']}
                                    style={IndexStyle.gradient}>
                    </LinearGradient>
                    <TouchableOpacity style={IndexStyle.whiteBtn2}
                                      onPress={() => this.pickSingleWithCamera(false, mediaType = 'video')}>
                        <Text style={{fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16}}>
                            {stringsoflanguages.StartRecord}
                        </Text>
                    </TouchableOpacity>
                </Container>
            </ScrollView>
        )
    }
}