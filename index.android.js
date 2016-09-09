/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import NavRoot from './app/NavRoot'
import {AppRegistry} from 'react-native'
import configureStore from './app/common/store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
class snapcoin extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavRoot/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('snapcoin', () => snapcoin);
