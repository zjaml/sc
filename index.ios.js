/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Main from './app/Main'
import {AppRegistry} from 'react-native'
import configureStore from './app/common/store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
class snapcoin extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('snapcoin', () => snapcoin);
