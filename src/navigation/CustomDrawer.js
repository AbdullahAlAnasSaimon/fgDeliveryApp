import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { SIZES,  COLORS, FONTS, constant } from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) =>{
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}
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

        </View>
        {/* Profile */}
        {/* DrawerItems */}

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
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent'
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
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
          {props => <MainLayout {...props}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer;

