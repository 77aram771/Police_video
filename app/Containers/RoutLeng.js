import React from 'react';

import {createStackNavigator,createAppContainer,navigationOptions} from 'react-navigation';
import LanguageSelectionScreen from '../Components/LanguageSelectionScreen';
import SignUp from '../Containers/SignUp';

import Main from "./Main";
const RoutLeng = createStackNavigator({
    LanguageSelectionScreen: {
        screen: LanguageSelectionScreen,
        navigationOptions: { header: null }
    },
    ContentScreen: { screen: Main },
});

export default createAppContainer(RoutLeng);