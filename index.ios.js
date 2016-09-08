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
import Test from './app/components/Test'

const store = configureStore()
class snapcoin extends Component {
  render() {
    return (
      <Test></Test>
    );
  }
}

AppRegistry.registerComponent('snapcoin', () => snapcoin);
