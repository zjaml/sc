/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Main from './app/Main'
import {AppRegistry} from 'react-native'

class snapcoin extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

AppRegistry.registerComponent('snapcoin', () => snapcoin);
