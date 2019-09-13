import React from 'react';
import {View, TouchableOpacity, TextInput, Image, Text, ScrollView, Dimensions, Alert, StyleSheet} from 'react-native'
import {Container, Content, Form, Input, Item, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/loginStyle';
import IndexStyle from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";
import Video from "react-native-video";
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundVideo: {
        width: 300,
        height: 200,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },

});


export default class MyVideosPage extends React.Component {
    state = {
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        paused: true,
        playerState: PLAYER_STATES.PLAYING,
        screenType: 'contain',
        changeScreenSize: false
    }

    onSeek = seek => {
        //Handler for change in seekbar
        this.videoPlayer.seek(seek);
    };

    onPaused = playerState => {
        //Handler for Video Pause
        this.setState({
            paused: !this.state.paused,
            playerState,
        });
    };

    onReplay = () => {
        //Handler for Replay
        this.setState({playerState: PLAYER_STATES.PLAYING});
        this.videoPlayer.seek(0);
    };

    onProgress = data => {
        const {isLoading, playerState} = this.state;
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({currentTime: data.currentTime});
        }
    };

    onLoad = data => this.setState({duration: data.duration, isLoading: false});

    onLoadStart = data => this.setState({isLoading: true});

    onEnd = () => this.setState({playerState: PLAYER_STATES.ENDED});

    onError = () => alert('Oh! ', error);

    exitFullScreen = () => {
        alert('Exit full screen');
    };

    onFullScreen = () => {
        if (this.state.screenType == 'contain')
            this.setState({screenType: 'contain', changeScreenSize: !this.state.changeScreenSize});
        else this.setState({screenType: 'contain'});
    };

    renderToolbar = () => (
        <View>
            <Text> toolbar </Text>
        </View>
    );
    onSeeking = currentTime => this.setState({currentTime});

    render() {

        // console.log( this.state.Video)
        return (
            <View>
                <Video source={{uri: this.props.item.sources}}
                       style={styles.backgroundVideo}
                       onEnd={this.onEnd}
                       onLoad={this.onLoad}
                       onLoadStart={this.onLoadStart}
                       onProgress={this.onProgress}
                       paused={this.state.paused}
                       ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                       resizeMode={this.state.screenType}
                       onFullScreen={this.state.isFullScreen}
                    // resizeMode="contain"
                />
                <MediaControls
                    duration={this.state.duration}
                    isLoading={this.state.isLoading}
                    mainColor="#333"
                    onFullScreen={this.onFullScreen}
                    onPaused={this.onPaused}
                    onReplay={this.onReplay}
                    onSeek={this.onSeek}
                    onSeeking={this.onSeeking}
                    playerState={this.state.playerState}
                    progress={this.state.currentTime}
                />
            </View>

        )
    }

}