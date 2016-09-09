import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import MapView from 'react-native-maps'
import {loadTasks, push} from '../common/actions'
import {connect} from 'react-redux'
import {getStores} from '../common/selectors'
import Drawer from 'react-native-drawer'
import SideMenu from './SideMenu'
import NavigationBar from 'react-native-navbar'

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
    var rightButtonConfig = {
      title: 'Next',
      handler: function onNext() {
        alert('hello!');
      }
    }

    var titleConfig = {
      title: 'Hello, world',
    }
    return (
      <Drawer
        open={false}
        type="displace"
        content={<SideMenu />}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}>
        <View style={styles.container}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig} />
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
                this.props.push({
                  key: 'store',
                  title: this.state.selectedStore.name,
                  props: {
                    id: this.state.selectedStore.id,
                  }
                })
              } }
                activeOpacity={1} underlayColor='#eee' style={styles.storePanel}>
                <Text style={styles.welcome}>
                  {this.state.selectedStore.name}
                </Text></TouchableHighlight>
            ) }
          </View>
        </View>
      </Drawer>
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

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
}
export default connect(mapStateToProps, { loadTasks, push })(Main)