import { Text, View, Image } from 'react-native'
import React, { useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

// import { Home } from '../screens';
import { COLORS, constant, FONTS, SIZES } from '../constants';
import { Header } from '../components';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import icons from '../constants/icons';

import LinearGradient from 'react-native-linear-gradient';
import History from './History';
import Home from './Home';
import PendingDelivery from './PendingDelivery';
import Wallet from './Wallet';
import Map from './Map';



const TabButton = ({ label, icon, isFocused, onPress }) => {
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
            flexDirection: 'column',
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 25
          }}
        >
          <Image
            source={icon}
            style={{
              height: 25,
              width: 25,
              tintColor: isFocused ? COLORS.primary : COLORS.gray
            }}
          />
          {
            isFocused && <Text>{label}</Text>
          }
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
          height: 65,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center'
        }}
        title={selectedTab}
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
        {
          selectedTab == "Home" && <Home/>
        }
        {
          selectedTab == "Delivery" && <PendingDelivery/>
        }
        {
          selectedTab == "History" && <History/>
        }
        {
          selectedTab == "Map" && <Map/>
        }
        {
          selectedTab == "Wallet" && <Wallet/>
        }
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
            label={constant.screens.delivery}
            icon={icons.delivery}
            isFocused={selectedTab == constant.screens.delivery}
            onPress={() => setSelectedTab(constant.screens.delivery)}
          />
          <TabButton
            label={constant.screens.map}
            icon={icons.map}
            isFocused={selectedTab == constant.screens.map}
            onPress={() => setSelectedTab(constant.screens.map)}
          />
          <TabButton
            label={constant.screens.history}
            icon={icons.history}
            isFocused={selectedTab == constant.screens.history}
            onPress={() => {
              setSelectedTab(constant.screens.history)
              // navigation.navigate("History");
            }}
          />
          <TabButton
            label={constant.screens.wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constant.screens.wallet}
            onPress={() => setSelectedTab(constant.screens.wallet)}
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