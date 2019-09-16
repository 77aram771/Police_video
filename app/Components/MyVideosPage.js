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
        Video: [
            {
                "id": 1,
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "subtitle": "By Blender Foundation",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                "title": "Big Buck Bunny"
            },
            {
                "id": 2,
                "description": "The first Blender Open Movie from 2006",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "subtitle": "By Blender Foundation",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
                "title": "Elephant Dream"
            },
            {
                "id": 3,
                "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "subtitle": "By Google",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
                "title": "For Bigger Blazes"
            },
            {
                "id": 4,
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "subtitle": "By Google",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
                "title": "For Bigger Escape"
            },
            {
                "id": 5,
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                "subtitle": "By Google",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
                "title": "For Bigger Fun"
            },
            {
                "id": 6,
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                "subtitle": "By Google",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
                "title": "For Bigger Joyrides"
            },
            {
                "id": 7,
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                "subtitle": "By Google",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
                "title": "For Bigger Meltdowns"
            },
            {
                "id": 8,
                "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                "subtitle": "By Blender Foundation",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
                "title": "Sintel"
            },
            {
                "id": 9,
                "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
                "subtitle": "By Garage419",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
                "title": "Subaru Outback On Street And Dirt"
            },
            {
                "id": 10,
                "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                "subtitle": "By Blender Foundation",
                "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
                "title": "Tears of Steel"
            }
        ],
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        paused: false,
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

    onSeeking = currentTime => this.setState({currentTime});

    render() {
        return (
            <Container style={Styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <View>
                    <Video
                        source={{uri: this.state.Video[this.props.navigation.state.params.videoId].sources}}
                        style={styles.backgroundVideo}
                        onEnd={this.onEnd}
                        onLoad={this.onLoad}
                        onLoadStart={this.onLoadStart}
                        onProgress={this.onProgress}
                        paused={this.state.paused}
                        ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                        resizeMode={this.state.screenType}
                        onFullScreen={this.state.isFullScreen}
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
                <View>
                    <Text>
                        {this.state.Video[this.props.navigation.state.params.videoId].description}
                    </Text>
                </View>

            </Container>

        )
    }

}