import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'
import globalStyles from '../globalStyle'
import {Button} from 'react-native-material-design'

class Task extends Component {
  constructor() {
    super()
    this.state = {
      reserved: false
    }
  }
  render() {
    return (
      <View style={globalStyles.navContentContainer}>
        <Text style={styles.title}>{this.props.task.description}</Text>
        {!this.state.reserved ? (
          <View style={{ alignSelf: 'flex-end', paddingRight: 20 }}>
            <Button text="Take this task" onPress={()=>{this.setState({reserved:true})}}></Button>
          </View>)
          : (<View style={{ alignSelf: 'center'}}>
            <Button text="Take photo"></Button>
          </View>)
        }
      </View>
    )
  }
}

function mapStateToProps(state, {id}) {
  return { task: state.entities.tasks[id] }
}

var styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default connect(mapStateToProps)(Task);