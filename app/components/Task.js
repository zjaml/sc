import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import globalStyles from '../globalStyle'

class Task extends Component {
  render() {
    return (
      <View style={globalStyles.navContentContainer}>
        <Text>Task</Text>
      </View>
    )
  }
}

function mapStateToProps(state,{id}){
  return {task: state.entities.tasks[id]}
}

export default connect(mapStateToProps)(Task);