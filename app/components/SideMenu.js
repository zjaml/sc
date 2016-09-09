import React, {Component} from 'react'
import {View, Text, ListView, StyleSheet, TouchableHighlight} from 'react-native'
import globalStyles from '../globalStyle'

class SideMenu extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(props.menus)
    }
  }

  render() {
    return null
    return (
      <View style={globalStyles.navContentContainer}>
        <ListView dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderMenuRow}></ListView>
      </View>
    )
  }
  
  renderMenuRow(menu) {
    return (
      <TouchableHighlight underlayColor="#eee" onPress={() => { } }>
        <View style={styles.rowContainer}>
          <Text>{menu.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
SideMenu.defaultProps = {
  menus: []
}
SideMenu.PropTypes = {
  // menu prop is the children of the navigation state object for the drawer.
  menus: React.PropTypes.array
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

export default SideMenu