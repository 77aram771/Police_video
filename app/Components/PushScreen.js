import React, {useEffect} from 'react';
import {Text, TextInput, View, Image, Button, StatusBar, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import axios from 'axios';
import image from '../images/edit.png'

class PushScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null,
            image: image
        }
    }

    useEffect () {

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
        }).catch(e => alert(e));


    }

    renderAsset(video) {

        if (video.mime && video.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(video);
            let file = this.state.video;

            let formdata = new FormData();

            formdata.append('video', file)

            axios({
                url: 'http://localhost:3000/uploadfile',
                method: 'POST',
                headers: {
                    authorization: 'Token'
                },
                data: formdata
            }).then((res) => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })

        }

        return this.renderImage(video);

    }

    renderVideo(video) {

        console.log('rendering video');
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
