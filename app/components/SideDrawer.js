import Drawer from 'react-native-drawer'
import {View, Text} from 'react-native'
import React from 'react'
import {Actions, DefaultRenderer} from 'react-native-router-flux'

class SideDrawer extends React.Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer ref="navigation"
        open={state.open}
        onOpen={() => Actions.refresh({ key: state.key, open: true }) }
        onClose={() => Actions.refresh({ key: state.key, open: false }) }
        type="displace"
        content={<SideMenu />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        }) }>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

class SideMenu extends React.Component {
  render() {
    return (
      <View>
        <Text>Side Menu</Text>
      </View>
    )
  }
}

export default SideDrawer
