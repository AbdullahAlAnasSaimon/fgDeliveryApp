import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryHistory } from '../hooks/useDeliveryHistory'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../constants'
import { TextButton } from '../components'
import { useDateTime } from '../hooks/useDateTime'
import Loader from '../components/Loader'

const History = () => {
  const { user } = useContext(StateContext)
  const [deliveriedHistory, deliveredLoading, deliveryRefetch] = useDeliveryHistory(user?.email);


  if (deliveredLoading) {
    return <Loader/>
  }

  deliveryRefetch();

  return (
    <View
      style={{
        flex: 1
      }}
    >

      <Text style={{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 700
      }}>Delivery History: {deliveriedHistory?.length}</Text>
      <ScrollView>
        {
          deliveriedHistory?.map(item => <Card
            key={item?._id}
            item={item}
          ></Card>)
        }
      </ScrollView>
    </View>
  )
}

const Card = ({ item }) => {
  const [formattedDate] = useDateTime(new Date(item?.deliveryTime));

  return (
    <View style={styles.card}>
      <Text>{formattedDate}</Text>
      <Text style={{ fontWeight: 700 }}>{item?._id}</Text>
      <Text>Total Price: {item?.total_price}৳</Text>
      {item?.paid && item?.condition === "Cash On Delivery" && <Text style={{color: COLORS.primary}}>Cash Collected</Text>}
      <Text
        style={{
          textAlign: 'center',
          color: COLORS.primary,
          marginTop: 3,
          marginBottom: 3
        }}
      >{item?.pick}</Text>
      <TextButton
        label="View Details"
        buttonContainerStyle={{
          marginTop: 10,
          borderRadius: 5
        }}
        labelStyle={{
          padding: 8,
        }}
      />
    </View>
  );
};

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.lightGray1,
    marginVertical: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});