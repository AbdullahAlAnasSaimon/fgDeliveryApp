import { Text, View } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

const Header = ({containerStyle, title, leftComponent}) => {
  return (
    <View
    style={{
      flexDirection: 'row',
      ...containerStyle
    }}
    >
      {/* Left */}
      {leftComponent}

      {/* Title */}
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Text
        style={{...FONTS.h2, fontWeight: 700}}
        >{title}</Text>
      </View>
      {/* Right */}
    </View>
  )
}

export default Header
