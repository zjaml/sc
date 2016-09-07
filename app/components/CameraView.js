import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Camera from 'react-native-camera'
import globalStyles from '../globalStyle'

class CameraView extends Component {
  render() {
    return (
      <View style={[globalStyles.navContentContainer, {backgroundColor: 'gray'}]}>
        <Camera style={styles.preview}
          aspect= {Camera.constants.Aspect.fill}
          captureTarget= {Camera.constants.CaptureTarget.cameraRoll}
          type= {Camera.constants.Type.back}
          defaultTouchToFocus>
          <View style={[styles.overlay, styles.topOverlay]}>
            <Text>Hello</Text>
          </View>
        </Camera>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  preview: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default CameraView;