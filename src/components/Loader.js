import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size='large' color={COLORS.primary}/>
  </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});