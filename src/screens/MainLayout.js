import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { COLORS } from '../constants';

const MainLayout = () => {
  return (
    <View>
      <Text style={{color: COLORS.primary}}>Main Layout</Text>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({})