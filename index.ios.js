/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Route from './app/Route'
import {AppRegistry} from 'react-native'
import configureStore from './app/common/store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
class snapcoin extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('snapcoin', () => snapcoin);
