import { Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

const Header = ({ containerStyle, title, leftComponent }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.white,
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
            style={{ ...FONTS.h2, fontWeight: 700 }}
          >{title}</Text>
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[
          COLORS.transparent,
          COLORS.gray
        ]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          zIndex: -999
        }}
      />
    </View>
  )
}

export default Header
