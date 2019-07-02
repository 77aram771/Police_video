import React from 'react';
import {View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import {Container, Content, Form, Text, Input, Item, Body} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";
import axios, {post} from 'axios';

import PushScreen from './PushScreen';
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

    uploadObj = (file) => {
        let form = new FormData();
        form.append('triangle.obj', new Blob([file]));
        fetch('http://192.168.0.138:3000/uploadfile', {
            method: 'POST',
            body: form
        }).then(response => {
            return response.blob();
        });
    };

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

        }).catch(e => alert(e));


    }

    renderAsset(video) {
        if (video.mime && video.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(video);
            let file = this.state.video;
        }

        return this.renderImage(video);

    }

    renderVideo(video) {

        console.log('rendering video');
        console.log('video', video);
        // this.fileUpload(video)
        //this.uploadFile(video)
        this.uploadObj(video)
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
                    <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                    </LinearGradient>
                    <TouchableOpacity style={IndexStyle.whiteBtn2} onPress={() => this.pickSingleWithCamera(false, mediaType = 'video')}>
                        <Text style={{fontFamily: 'Arial-BoldMT', color: '#bc1d23', fontSize: 16}} >
                            {stringsoflanguages.StartRecord}
                        </Text>
                    </TouchableOpacity>
                </Container>
            </ScrollView>
        )
    }
}