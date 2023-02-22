import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { SIZES, COLORS, FONTS, constant } from '../constants';
import icons from '../constants/icons';
import logo from '../assets/logo/logo-text.png';
import { setSelectedTab } from '../stores/tab/tabActions';
import { connect } from 'react-redux';
import { StateContext } from '../context/AuthContext';



const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null
      }}
    onPress={onPress}
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

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  const {logOut, user} = useContext(StateContext)

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .then(() => {
      navigation.navigate("LogIn");
    })

  }

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
                tintColor: COLORS.white
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
          {/* <Image
            source={user?.profileURL ? user?.profileURL : logo}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius
            }}
          /> */}
          <View
            style={{
              marginLeft: SIZES.radius
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
                fontWeight: 700
              }}
            >{user?.displayName}</Text>
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
            isFocused={selectedTab === constant.screens.home}
            onPress={() => {
              setSelectedTab(constant.screens.home)
              navigation.navigate("MainLayout")
            }}
          />
          <CustomDrawerItem
            label="Notification"
            icon={icons.notification}
          />
          <CustomDrawerItem
            label="Favourite"
            icon={icons.favourite}
          />
          <CustomDrawerItem
            label="Track Your Order"
            icon={icons.location}
          />
          <CustomDrawerItem
            label="Coupons"
            icon={icons.coupon}
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
            label="Settings"
            icon={icons.setting}
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
            onPress={handleLogOut}
            icon={icons.logout}
          />
        </View>

      </View>
    </DrawerContentScrollView>
  )
}

const CustomDrawer = ({selectedTab, setSelectedTab}) => {

  // const [progress, setProgress] = useState(new Animated.Value(0))

  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8]
  // })

  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 26]
  // })

  // const animatedStyle = { borderRadius, transform: [{ scale }] }

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
          width: '80%',
          paddingRight: 20,
          backgroundColor: 'transparent'
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent'
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {

          // setTimeout(() => {
          //   setProgress(props.progress)
          // }, 0)

          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          )
        }}
      >

        <Drawer.Screen name='MainLayout'>
          {props => <MainLayout {...props}
          // drawerAnimationStyle={animatedStyle}
          />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
