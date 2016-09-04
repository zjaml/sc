import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import {loadTasks} from './common/actions'
import {connect} from 'react-redux'
import {getStores} from './common/selectors'


class Main extends Component {
  constructor(){
    this.state = {
      selectedStoreId: null
    }
  }

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
        }}>
          {this.props.stores && this.props.stores.map(store=> (
            <MapView.Marker key={store.id} coordinate={store.coordinate} title={store.name}
              onPress = {() => {
                this.setState({selectedStoreId: store.id})
              }}
            />
          ))}
        </MapView>
        <Text style={styles.welcome}>
          {}
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
})

Main.propTypes = {
  stores: React.PropTypes.array
}

function mapStateToProps(state){
  return {
    stores: getStores(state)
  }
}

export default connect(mapStateToProps, {loadTasks})(Main)