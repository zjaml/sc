import React, { Component } from 'react'
import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

import Main from './components/Main'
import Store from './components/Store'
import Task from './components/Task'
import CameraView from './components/CameraView'
import SideDrawer from './components/SideDrawer'
import Setting from './components/Setting'
import {connect} from 'react-redux'
import {push, pop} from './common/actions'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  _renderScene (props) {
    const { route } = props.scene
    switch(route.key){
      case 'home':
        return <Main/>
      case 'store':
        return <Store {...route.props}/>
      case 'task':
        return <Task {...route.props}/>
      case 'camera':
        return <CameraView {...route.props}/>
      default:
        return null
    }
  }

  _handleBackAction () {
    this.props.pop()
  }

  _handleNavigate (action) {
    //todo: what's dispatching push, back and pop?
    switch (action && action.type) {
      case 'push':
        this.props.push(action.route)
      case 'back':
      case 'pop':
        return this._handleBackAction()
    }
  }

  render () {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigationState}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene} />
      )
   }
}

function mapStateToProps (state) {
  return {
    navigationState: state.navigationState
   }
}

export default connect(mapStateToProps, {push, pop})(NavRoot)