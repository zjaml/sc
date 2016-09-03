import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Main from './Main'

export default () => (
  <Router>
    <Scene key="home" component={Main} title="Map" initial={true}/>
  </Router>
)