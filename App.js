import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import reducer from './app/store/reducers/index';
import Main from './app/Containers/Main';
import {Root, Header} from 'native-base';
import LanguageSelectionScreen from "./app/Components/LanguageSelectionScreen";
import SplashScreen from 'react-native-splash-screen'
import { DrawerActions, StackNavigator, NavigationActions, createStackNavigator,createAppContainer } from 'react-navigation';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends Component {

    componentDidMount = () => {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    };

    render() {
        return (
            <Root>
                <Header androidStatusBarColor="#030b10" style={{display: 'none'}}/>
                <Provider store={store}>
                    {SplashScreen.show()}
                    {/*<Main/>*/}
                    <LanguageSelectionScreen/>
                </Provider>
            </Root>
        );
    }
}

