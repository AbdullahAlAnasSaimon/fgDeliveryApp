import { Text, View, Image } from 'react-native'
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

// import { Home } from '../screens';
import { COLORS, constant, FONTS, SIZES } from '../constants';
import { Header } from '../components';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import icons from '../constants/icons';

import LinearGradient from 'react-native-linear-gradient';



const TabButton = ({ icon, isFocused, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <Animated.View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Animated.View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 25,
            // backgroundColor: COLORS.primary
          }}
        >
          <Image
            source={icon}
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? COLORS.primary : COLORS.gray,
            }}
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

  useEffect(() => {
    setSelectedTab(constant.screens.home)
  }, [])

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
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
            onPress={() => navigation.openDrawer()}
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

      {/* Footer */}
      <View
        style={{
          height: 80,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 3 }}
          colors={[
            COLORS.transparent,
            COLORS.gray
          ]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 80,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
          }}
        />

        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: "100%",
            paddingHorizontal: SIZES.radius,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white
          }}
        >
          <TabButton
            label={constant.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constant.screens.home}
            onPress={() => setSelectedTab(constant.screens.home)}
          />
          <TabButton
            label={constant.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constant.screens.search}
            onPress={() => setSelectedTab(constant.screens.search)}
          />
          <TabButton
            label={constant.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constant.screens.cart}
            onPress={() => setSelectedTab(constant.screens.cart)}
          />
          <TabButton
            label={constant.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constant.screens.favourite}
            onPress={() => setSelectedTab(constant.screens.favourite)}
          />
          <TabButton
            label={constant.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constant.screens.notification}
            onPress={() => setSelectedTab(constant.screens.notification)}
          />
        </View>
      </View>
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