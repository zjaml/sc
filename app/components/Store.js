import React, {Component} from 'react';
import {View, Text,
  StyleSheet} from 'react-native'

class Store extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
    margin: 109
        }}>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Store;