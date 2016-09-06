import React, {Component} from 'react';
import {View, Text,
  StyleSheet, Navigator,
  ListView
} from 'react-native'
import {connect} from 'react-redux'
import {getTasksForStore} from '../common/selectors'

class Store extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(props.tasks)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderTaskRow}></ListView>
      </View>
    )
  }

  renderTaskRow(task) {
    return (
      <View>
        <Text>{task.description}</Text>
      </View>
    )
  }
}

Store.propTypes = {
  tasks: React.PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  }
})

function mapStateToProps(state, {id}) {
  return {
    store: state.entities.stores[id],
    tasks: getTasksForStore(state, id)
  }
}

export default connect(mapStateToProps)(Store);