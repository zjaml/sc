import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import {loadTasks} from './common/actions'
import {connect} from 'react-redux'

class Main extends Component {
  componentWillMount() {
    this.props.loadTasks()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
        <Text style={styles.welcome}>
          Hello
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload, {'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    height: 200,
    alignSelf: 'stretch'
  },
  welcome: {
    flex: 0,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default connect(null, {loadTasks})(Main);