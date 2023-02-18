import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import { Home } from '../screens';
import { COLORS, constant, SIZES } from '../constants';
import { Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '../constants/icons';

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

  useEffect(() => {
    setSelectedTab(constant.screens.home)
  }, [])

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
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          alignItems: 'center'
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.gray2,
            borderRadius: SIZES.radius
          }}
          >
            <Image 
            source={icons.menu}
            />
          </TouchableOpacity>
        }
      />
      {/* Body content */}
      <View
        style={{
          flex: 1
        }}
        >
        <Text>Main Layout</Text>

      </View>
      {/* Footer */ }
    </Animated.View >
  )
}


function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch
        (setSelectedTab(selectedTab))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)