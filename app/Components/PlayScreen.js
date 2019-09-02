import React, {Component} from "react";
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


const deviceWidth = Dimensions.get("window").width;

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

const settings = {
    camera: { cameraId: 1, cameraFrontMirror: true },
    audio: { bitrate: 32000, profile: 1, samplerate: 44100 },
    video: {
        preset: 24,
        bitrate: 400000,
        profile: 2,
        fps: 30,
        videoFrontMirror: true
    }
};

export default class PlayScreen extends Component {
    state = {
        admin: true,
        isPublishing: false,
        userComment: "",
        hasPermission: true,
        paused: true
    };

    onPressAdminBtn = () => {
        const {admin, hasPermission} = this.state;
        this.setState({admin: !admin});
        //console.log('admin', admin)
        if (admin) {
            //settings.camera.cameraId = 1;
            console.log('settings.camera', settings.camera.cameraId);
            if (Platform.OS === "android") {
                if (!hasPermission) {
                    this.checkPermissions();
                }
            }
        }
        else {
            //settings.camera.cameraId = 0;
            console.log('settings.camera', settings.camera.cameraId)
        }
    };

    onPressPlayBtn = () => {
        const {paused: pausedState} = this.state;
        this.setState({paused: !pausedState});
    };

    renderCameraView = () => {
        const {hasPermission} = this.state;
        if (Platform.OS === "android" && !hasPermission) {
            return <View />;
        }

        return (
            <NodeCameraView
                style={styles.nodeCameraView}
                /* eslint-disable */
                ref={vb => {
                    this.vb = vb;
                }}
                /* eslint-enable */
                outputUrl="rtmp://live.mux.com/app/22d041c6-ed31-7801-d868-ea553a1fe671"
                camera={settings.camera}
                audio={settings.audio}
                video={settings.video}
                autopreview
            />
        );
    };

    checkPermissions = async () => {
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
            this.setState({hasPermission: hasAllPermissions});
        } catch (err) {
            console.warn(err);
        }
    };

    onPressPublishBtn = async () => {
        const {isPublishing: publishingState, hasPermission} = this.state;
        if (Platform.OS === "android") {
            if (!hasPermission) {
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
        const {admin, isPublishing} = this.state;
        return (
            <View style={styles.container}>

                {this.renderCameraView()}
                <TouchableOpacity style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    borderWidth: 1,
                    borderStyle: 'solid'
                }} onPress={this.onPressPublishBtn}>
                    <View style={styles.goLive}>
                        <Text style={styles.btnText}>
                            {isPublishing ? "END LIVE" : "GO LIVE"}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.adminBtnContainer}
                    onPress={this.onPressAdminBtn}
                >
                    <View style={styles.adminBtn}>
                        <Text style={styles.btnText}>
                            {admin ? "Front Camera" : "Back Camera"}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
