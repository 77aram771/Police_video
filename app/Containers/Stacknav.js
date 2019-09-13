import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Image,
    View, TouchableOpacity
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Icon,
    Drawer
} from 'native-base';
import {
    DrawerActions,
    NavigationActions,
    createStackNavigator
} from 'react-navigation';
import Home from "./Home";
import Profile from './Profile';
import Messages from './Messages';
import MyVideos from './MyVideos';
import Notification from './Notification';
import LegalDetails from './LegalDetails';
import Tutorial from './Tutorial'
import stringsoflanguages from '../leng/stringsoflanguages';
import PlayScreen from '../Components/PlayScreen';
import MyVideosPage from '../Components/MyVideosPage';

const {Home_N, StartVideo} = stringsoflanguages;

console.log("Home_N", Home_N)
console.log("StartVideo", StartVideo)

const StackNav = createStackNavigator({

    Main: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: "Home",
            headerStyle: {
                height: 100,
                backgroundColor: '#030b10',
                textAlign: 'center',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 80 + "%",
                color: 'white',
                textAlign: 'center'
            },
            tabBarLabel: 'Search',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon ios='ios-menu' android="md-menu" style={{
                        fontSize: 40,
                        color: 'white',
                        marginLeft: 30,
                        textAlign: 'center',
                    }}/>
                </TouchableOpacity>
            ),
        })
    },

    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            title: "Profile",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 80 + "%",
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
        })
    },

    Messages: {
        screen: Messages,
        navigationOptions: ({navigation}) => ({
            title: "Messages",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 90 + '%',
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity onPress={() => console.log('qweasdzx')}>
                    <Icon ios='ios-search' android="md-search" style={{
                        fontSize: 40,
                        color: 'white',
                        marginRight: 30,
                        textAlign: 'center',
                    }}/>
                </TouchableOpacity>
            )
        })
    },

    Myvideos: {
        screen: MyVideos,
        navigationOptions: ({navigation}) => ({
            title: "My Videos",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 90 + '%',
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity onPress={() => console.log('qweasdzx')}>
                    <Icon ios='ios-search' android="md-search" style={{
                        fontSize: 40,
                        color: 'white',
                        marginRight: 30,
                        textAlign: 'center',
                    }}/>
                </TouchableOpacity>
            )
        })
    },

    MyVideosPage: {
        screen: MyVideosPage,
        navigationOptions: ({navigation}) => ({
            title: "MyVideosPage",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 90 + '%',
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity onPress={() => console.log('qweasdzx')}>
                    <Icon ios='ios-search' android="md-search" style={{
                        fontSize: 40,
                        color: 'white',
                        marginRight: 30,
                        textAlign: 'center',
                    }}/>
                </TouchableOpacity>
            )
        })
    },

    Notification: {
        screen: Notification,
        navigationOptions: ({navigation}) => ({
            title: "Notification",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 80 + '%',
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
        })
    },

    LegalDetails: {
        screen: LegalDetails,
        navigationOptions: ({navigation}) => ({
            title: "Legal Details",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 90 + '%',
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity onPress={() => console.log('qweasdzx')}>
                    <Icon ios='ios-search' android="md-search" style={{
                        fontSize: 40,
                        color: 'white',
                        marginRight: 30,
                        textAlign: 'center',
                    }}/>
                </TouchableOpacity>
            )
        })
    },

    Tutorial: {
        screen: Tutorial,
        navigationOptions: ({navigation}) => ({
            title: "Tutorial",
            headerStyle: {
                height: 100,
                textAlign: 'center',
                backgroundColor: '#030b10',
                borderBottomWidth: 0.5,
                borderBottomStyle: 'solid',
                borderColor: '#334759',
            },
            headerTitleStyle: {
                width: 80 + "%",
                color: 'white',
                textAlign: 'center',
            },
            headerTintColor: 'white',
        })
    },

    PlayScreen: {
        screen: PlayScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                display: "none",
            },

        })
    },

});

export default StackNav;