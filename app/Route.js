import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {StyleSheet} from 'react-native'
import Main from './Main'
import Store from './components/Store'
import Task from './components/Task'
import CameraView from './components/CameraView'


export default () => (
  <Router>
    <Scene key="home" component={Main} title="Map" initial={true}/>
    <Scene key="store" component={Store}/>
    <Scene key="task" component={Task} title="Task"/>
    <Scene key="camera" component={CameraView} title="Camera"/>
  </Router>
)

var styles = StyleSheet.create({
  navbar: {
    paddingTop: 0,
    height: 44
  },
  title: {
    top: 10,
    marginTop: 0
  }
})