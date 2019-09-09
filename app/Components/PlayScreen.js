import React, {Component} from "react";
import {connect} from 'react-redux';
import {NodeCameraView} from "react-native-nodemediaclient";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    PermissionsAndroid,
    Platform
} from "react-native";
import * as actions from "../store/actions/video-action";

const deviceWidth = Dimensions.get("window").width;

const settings = {
    camera: {cameraId: 0, cameraFrontMirror: true},
    audio: {bitrate: 32000, profile: 1, samplerate: 44100},
    video: {
        preset: 24,
        bitrate: 400000,
        profile: 2,
        fps: 30,
        videoFrontMirror: true
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "flex-end"
    },
    nodePlayerView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    nodeCameraView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    playBtn: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#333",
        borderColor: "#333",
        borderWidth: 3,
        borderRadius: 2,
        height: 50,
        width: deviceWidth / 2,
        paddingVertical: 10,
        paddingHorizontal: 30,
        elevation: 4,
        marginVertical: 10
    },
    playBtnContainer: {
        position: "absolute",
        bottom: 100,
        left: 0,
        right: 0,
        marginVertical: 20
    },
    goLive: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#d1a667",
        borderColor: "#d1a667",
        borderWidth: 3,
        borderRadius: 2,
        height: 50,
        width: deviceWidth / 2,
        paddingVertical: 10,
        paddingHorizontal: 30,
        elevation: 4,
        marginVertical: 10
    },
    adminBtnContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: 30,
        marginTop: 60
    },
    adminBtn: {
        backgroundColor: "#006D9E",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        elevation: 4
    },
    btnText: {color: "#FFF", fontSize: 18}
});

class PlayScreen extends Component {
    state = {
        admin: false,
        isPublishing: false,
        userComment: "",
        hasPermission: false,
        paused: true
    };

    renderCameraView = () => {
        console.log('this.props  PS', this.props.user.data.user._id)
        const urlID = `rtmp://128.199.247.46/live/${this.props.user.data.user._id}`;
        return (
            <NodeCameraView
                style={styles.nodeCameraView}
                /* eslint-disable */
                ref={vb => {
                    this.vb = vb;
                }}
                /* eslint-enable */
                outputUrl={urlID}
                camera={settings.camera}
                audio={settings.audio}
                video={settings.video}
                autopreview
            />
        );
    };

    checkPermissions = async () => {
        console.log("Checking Permissions Android");
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            ]);
            let hasAllPermissions = true;
            Object.keys(granted).forEach(key => {
                // key: the name of the object key
                // index: the ordinal position of the key within the object
                if (granted[key] !== "granted") {
                    console.log("Does not have permission for: ", granted[key]);
                    hasAllPermissions = false;
                }
            });
            console.log("hasAllPermissions: ", hasAllPermissions);
            this.setState({hasPermission: hasAllPermissions});
        } catch (err) {
            console.warn(err);
        }
    };

    onPressPublishBtn = async () => {
        const {isPublishing: publishingState, hasPermission} = this.state;
        if (Platform.OS === "android") {
            if (hasPermission) {
                this.checkPermissions();
                return;
            }
        }

        if (publishingState) {
            this.vb.stop();
        } else {
            this.vb.start();
        }

        this.setState({isPublishing: !publishingState});
    };

    render() {
        const {isPublishing} = this.state;
        return (
            <View style={styles.container}>
                {this.renderCameraView()}

                <TouchableOpacity onPress={this.onPressPublishBtn}>
                    <View style={styles.goLive}>
                        <Text style={styles.btnText}>
                            {isPublishing ? "END LIVE" : "GO LIVE"}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const mstp = (state) => ({
    user: state.user
});

const mdtp = {
    ...actions,
};


export default connect(mstp, mdtp)(PlayScreen);