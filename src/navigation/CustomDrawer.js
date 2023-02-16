import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { SIZES, COLORS, FONTS, constant } from '../constants';
import icons from '../constants/icons';
import logo from '../assets/logo/logo-text.png';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon}) =>{
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
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

const CustomDrawer = () => {
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
          return (
            <CustomDrawerContent
              navigation={props.navigation}
            />
          )
        }}
      >

        <Drawer.Screen name='MainLayout'>
          {props => <MainLayout {...props} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer;

