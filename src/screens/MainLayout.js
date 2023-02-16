import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated from 'react-native-reanimated';

const MainLayout = ({drawerAnimationStyle}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimationStyle
      }}
    >
      <Text>Main Layout</Text>
    </Animated.View>
  )
}

export default MainLayout

const styles = StyleSheet.create({})