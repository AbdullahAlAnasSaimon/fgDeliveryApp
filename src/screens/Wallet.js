import { StyleSheet, Text, View } from 'react-native';
import React, {useContext} from 'react';
import { useDeliveryOrders } from '../hooks/useDeliveryOrders';
import { StateContext } from '../context/AuthContext';
import Loader from '../components/Loader';
import { COLORS } from '../constants';

const Wallet = () => {
  const {user} = useContext(StateContext);
  const [deliveryOrders, orderLoading, orderRefetch] = useDeliveryOrders(user?.email);

  if(orderLoading){
    return <Loader/>
  }
  orderRefetch();

  const totalIncome = deliveryOrders?.data?.reduce(
    (acc, item) => acc + item?.shipping_fee,
    0
  );

  console.log(totalIncome);

  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      marginTop: 10
    }}
    >
      <Text>Current Balance</Text>
      <Text
      style={{
        fontSize: 25,
        fontWeight: 700,
        color: COLORS.primary
      }}
      >{totalIncome} TK</Text>
    </View>
  )
}

export default Wallet;

const styles = StyleSheet.create({})