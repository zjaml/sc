import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import MapView from 'react-native-maps'
import {loadTasks} from './common/actions'
import {connect} from 'react-redux'
import {getStores} from './common/selectors'
import {Actions} from 'react-native-router-flux'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedStore: null
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
          {this.props.stores && this.props.stores.map(store => (
            <MapView.Marker key={store.id} coordinate={store.coordinate} title={store.name}
              onPress = {() => {
                //setting both onPress and onSelect as a work around for the react-native-maps issue
                this.setState({ selectedStore: store })
              } }
              onSelect = {() => {
                this.setState({ selectedStore: store })
              } }
              />
          )) }
        </MapView>
        <View>
          {this.state.selectedStore && (
            <TouchableHighlight onPress={() => {
              Actions.store({id:this.state.selectedStore.id, title: this.state.selectedStore.name})
            }}
              activeOpacity={1} underlayColor='#eee' style={styles.storePanel}>
              <Text style={styles.welcome}>
                {this.state.selectedStore.name}
              </Text></TouchableHighlight>
          ) }
        </View>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  storePanel: {
  }
})

Main.propTypes = {
  stores: React.PropTypes.array
}

function mapStateToProps(state) {
  return {
    stores: getStores(state)
  }
}

export default connect(mapStateToProps, { loadTasks })(Main)