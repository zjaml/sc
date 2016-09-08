import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {StyleSheet} from 'react-native'
import Main from './Main'
import Store from './components/Store'
import Task from './components/Task'
import CameraView from './components/CameraView'
import SideDrawer from './components/SideDrawer'

class Route extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="drawer" component={SideDrawer} open={false}>
          <Scene key="main">
            <Scene key="home" component={Main} title="Map" initial={true}/>
            <Scene key="store" component={Store}/>
            <Scene key="task" component={Task} title="Task"/>
            <Scene key="camera" component={CameraView} title="Camera"/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

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

export default Route