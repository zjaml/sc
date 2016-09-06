import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Main from './Main'
import Store from './components/Store'
import Task from './components/Task'


export default () => (
  <Router>
    <Scene key="home" component={Main} title="Map" initial={true}/>
    <Scene key="store" component={Store}/>
    <Scene key="task" component={Task} title="Task"/>
  </Router>
)