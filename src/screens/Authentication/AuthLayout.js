import { Text, View, Image } from 'react-native'
import React, { Children } from 'react';
import { FONTS, SIZES, COLORS } from '../../constants';
import Logo from '../../assets/logo/logo-text.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
      }}
    >
      <KeyboardAwareScrollView
      keyboardDismissMode='on-drag'
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: SIZES.padding
      }}
      >
        {/* App Icon */}
        <View
        style={{
          alignItems: 'center'
        }}
        >
          <Image
          source={Logo}
          />
        </View>

        {/* Title */}
        <View
        style={{
          marginTop: SIZES.padding,
          ...titleContainerStyle
        }}
        >
          <Text
          style={{
            textAlign: 'center',
            ...FONTS.h2,
            fontWeight: 700
          }}
          >{title}</Text>
          <Text
          style={{
            textAlign: 'center',
            color: COLORS.darkGray,
            marginTop: SIZES.base
          }}
          >{subtitle}</Text>
        </View>

        {/* children content */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout
