import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../components'
import { COLORS, icons, SIZES } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const DeliveryDetails = ({item, route}) => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Header */}
      <Header
        containerStyle={{
          height: 65,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center'
        }}
        title={"Delivery Details"}
        leftComponent={
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.down_arrow}
              style={{
                width: 30,
                height: 30
              }}
            />
          </TouchableOpacity>
        }
      />
      <Text>DeliveryDetails</Text>
    </View>
  )
}

export default DeliveryDetails

const styles = StyleSheet.create({})