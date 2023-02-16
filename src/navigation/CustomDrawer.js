import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { SIZES, COLORS, FONTS, constant } from '../constants';
import icons from '../constants/icons';
import logo from '../assets/logo/logo-text.png';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}
    // onPress
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3
        }}
      >{label}</Text>
    </TouchableOpacity>
  )
}

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.primary
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center'
          }}
          onPress={() => console.log("profile")}
        >
          <Image
            source={logo}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3
              }}
            >Abdullah Al Anas Saimon</Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4
              }}
            >View your profile</Text>
          </View>
        </TouchableOpacity>

        {/* DrawerItems */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding
          }}
        >
          <CustomDrawerItem
            label={constant.screens.home}
            icon={icons.home}
          />
          <CustomDrawerItem
            label={constant.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constant.screens.favourite}
            icon={icons.favourite}
          />
          {/* line divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1
            }}
          />
          <CustomDrawerItem
            label="Track Your Order"
            icon={icons.location}
          />
          <CustomDrawerItem
            label="Coupons"
            icon={icons.coupon}
          />
          <CustomDrawerItem
            label="Settings"
            icon={icons.setting}
          />
          <CustomDrawerItem
            label="Invite a Friend"
            icon={icons.profile}
          />
          <CustomDrawerItem
            label="Help Center"
            icon={icons.help}
          />
        </View>

        <View
          style={{
            marginBottom: SIZES.padding
          }}
        >
          <CustomDrawerItem
            label="Log Out"
            icon={icons.logout}
          />
        </View>

      </View>
    </DrawerContentScrollView>
  )
}

const CustomDrawer = () => {

  const [progress, setProgress] = useState(new Animated.Value(0))

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  })

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26]
  })

  const animatedStyle = { borderRadius, transform: [{ scale }] }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary
      }}
    >
      <Drawer.Navigator
        drawerType='slide'
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent'
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent'
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {

          setTimeout(() => {
            setProgress(props.progress)
          }, 0)

          return (
            <CustomDrawerContent
              navigation={props.navigation}
            />
          )
        }}
      >

        <Drawer.Screen name='MainLayout'>
          {props => <MainLayout {...props} 
          drawerAnimationStyle={animatedStyle}
          />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer;

