import React from 'react';
import {createStackNavigator, createAppContainer, navigationOptions, NavigationActions} from 'react-navigation';
import LanguageSelectionScreen from '../Components/LanguageSelectionScreen';
import Main from "./Main";

const RoutLeng = createStackNavigator({
    LanguageSelectionScreen: {
        screen: LanguageSelectionScreen,
        navigationOptions: {
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
            swipeEnabled: false
        },

    },
    ContentScreen: {screen: Main },
});

export default createAppContainer(RoutLeng);