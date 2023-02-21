import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryHistory } from '../hooks/useDeliveryHistory'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../constants'
import { TextButton } from '../components'

const History = () => {
  const { user } = useContext(StateContext)
  const [deliveriedHistory, deliveredLoading, deliveryRefetch] = useDeliveryHistory(user?.email);
  console.log(deliveriedHistory.length);

  if(deliveredLoading){
    return <Text style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>Loading...</Text>
  }
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
      }}>Delivery History: {deliveriedHistory.length}</Text>
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
  return (
    <View style={styles.card}>
      <Text>{item?.deliveryTime}</Text>
      <Text>{item?._id}</Text>
      <Text>Total Price: {item?.total_price}৳</Text>
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
        borderRadius: SIZES.radius
      }}
      labelStyle={{
        padding: 5,
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