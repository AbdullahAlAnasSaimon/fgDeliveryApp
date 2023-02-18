import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

import {Home } from '../screens';
import { SIZES } from '../constants';
import Header from '../components/Header';

const MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {
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
          marginTop: 40,
          alignItems: 'center'
        }}
      />
      {/* Body content */}
      {/* Footer */}
      <Text>Main Layout</Text>
    </Animated.View>
  )
}


function mapStateToProps(state){
  return {
    selectedTab: state.tabReducer.selectedTab
  }
}

function mapDispatchToProps(dispatch){
  return{
    setSelectedTab: (selectedTab) => { return dispatch
      (setSelectedTab(selectedTab))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)