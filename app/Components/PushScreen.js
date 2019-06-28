import React, {useEffect} from 'react';
import {Text, TextInput, View, Image, Button, StatusBar, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import axios from 'axios';

class PushScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    useEffect() {
        axios.post(`http://localhost:3000/uploadfile`)
            .then(res => {
                const image = res.data;
                this.setState({image});
            }, () => console.log('image', image))
            .catch(err => {
                console.log(err);
            })
    };

    pickSingleWithCamera(cropping, mediaType = 'photo') {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        }).then(image => {
            // console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                images: null
            });
        }).catch(e => alert(e));
    }

    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
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
                    {this.state.image ? this.renderAsset(this.state.image) : null}
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
