import React, {Component} from 'react';
import {View, Text,
  StyleSheet, Navigator,
  ListView, TouchableHighlight
} from 'react-native'
import {connect} from 'react-redux'
import {getTasksForStore} from '../common/selectors'
import globalStyles from '../globalStyle'
import {push} from '../common/actions'


class Store extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(props.tasks)
    }
    this.renderTaskRow = this.renderTaskRow.bind(this)
  }

  render() {
    return (
      <View style={globalStyles.navContentContainer}>
        <ListView dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderTaskRow}></ListView>
      </View>
    )
  }

  renderTaskRow(task) {
    return (
      <TouchableHighlight underlayColor="#eee" onPress={() => { 
        this.props.push({
          key:'task',
          title: 'Task',
          props: {
            id: task.id,
          }
        })}}>
        <View style={styles.rowContainer}>
          <Text>{task.description}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

Store.propTypes = {
  tasks: React.PropTypes.array
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
})

function mapStateToProps(state, {id}) {
  return {
    store: state.entities.stores[id],
    tasks: getTasksForStore(state, id)
  }
}

export default connect(mapStateToProps, {push})(Store);