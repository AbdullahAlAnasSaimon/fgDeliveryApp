import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryOrders } from '../hooks/useDeliveryOrders';

const Home = () => {
  const { user } = useContext(StateContext);
  const [deliveryOrders, orderLoading, orderRefetch] = useDeliveryOrders(user?.email)
  return (
    <View>
      <Text>Home: {deliveryOrders?.length}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})