import React, {Component} from 'react';
import {View, Text,
  StyleSheet, Navigator} from 'react-native'

class Store extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
        }}>Hello</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  }
})
export default Store;