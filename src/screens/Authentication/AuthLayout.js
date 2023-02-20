import { Text, View } from 'react-native'
import React from 'react';
import { FONTS, SIZES, COLORS } from '../../constants';

const AuthLayout = ({title, subtitle, titleContainerStyle, clildren}) => {
  return (
    <View
    style={{
      flex: 1,
      paddingVertical: SIZES.padding,
      backgroundColor: COLORS.white
    }}
    >
      <Text>AuthLayout</Text>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})