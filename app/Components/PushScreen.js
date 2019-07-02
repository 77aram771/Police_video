import React, {useEffect} from 'react';
import {Text, TextInput, View, Image, Button, StatusBar, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import axios, {post} from 'axios';
import image from '../images/edit.png'

class PushScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null,
            image: image
        }
    }


    // fileUpload = (file) => {
    //     const url = 'http://localhost:3000/uploadfile';
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     console.log('formData', formData);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     };
    //     return post(url, formData, config)
    // };

    // uploadFile = (files) => {
    //     var formData = new FormData();
    //     formData.append(`file${files}`);
    //
    //     fetch('http://localhost:3000/uploadfile', {
    //         // content-type header should not be specified!
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(response => response.json())
    //         .then(success => {
    //             // Do something with the successful response
    //         })
    //         .catch(error => console.log(error)
    //         );
    // };

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
            <View>
                <ScrollView>
                    {this.state.video ? this.renderAsset(this.state.video) : null}
                    {this.state.images ? this.state.images.map(i => <View
                        key={i.uri}>{this.renderAsset(i)}</View>) : null}
                </ScrollView>
                <TouchableOpacity onPress={() => this.pickSingleWithCamera(false, mediaType = 'video')}
                                  style={styles.button}>
                    <Text style={styles.text}>Select Single Video With Camera</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default PushScreen;
