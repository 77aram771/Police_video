import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/store/reducers/index';
import Main from './app/Containers/Main';
import { Root, Header } from 'native-base';

const store = createStore(reducer, applyMiddleware(thunk));


export default class App extends Component {
  render() {
    return (
      <Root>
        <Header androidStatusBarColor="#030b10" style={{ display: 'none' }} />
        <Provider store={store}>
          <Main />
        </Provider>
      </Root>
    );
  }
}

