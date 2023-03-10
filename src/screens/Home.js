import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryOrders } from '../hooks/useDeliveryOrders';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants';
import { TextButton } from '../components';
import Loader from '../components/Loader';
import { useDateTime } from '../hooks/useDateTime';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { user } = useContext(StateContext);
  const [deliveryOrders, orderLoading, orderRefetch] = useDeliveryOrders(user?.email)
  const filteredOrders = deliveryOrders?.data?.filter(order => !order?.deliver && !order?.pick)

  if (orderLoading) {
    return <Loader />
  }

  orderRefetch();

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
      }}>Available Delivery: {filteredOrders?.length}</Text>
      <ScrollView>
        {
          filteredOrders?.map(item => <Card
            key={item?._id}
            item={item}
          ></Card>)
        }
      </ScrollView>
    </View>
  )
}

export default Home;

const Card = ({ item }) => {
  const navigation = useNavigation();
  const [formattedDate] = useDateTime(new Date(item?.deliveryAssignTime))
  return (
    <View style={styles.card}>
      <Text>Assigned At: {formattedDate}</Text>
      <Text style={{ fontWeight: 700 }}>Order Id: {item?._id}</Text>
      <Text>Total Ordered Product: {item?.order_products.length}</Text>
      <Text>Total Price: {item?.total_price}৳</Text>
      <Text style={{ fontWeight: 700, color: COLORS.primary }}>{item?.paid ? "Paid" : "Collect Cash"}</Text>
      <Text
        style={{
          textAlign: 'center',
          color: COLORS.primary,
          marginTop: 3,
          marginBottom: 3
        }}
      >{item?.pick}</Text>
      <TextButton
        label="See Details"
        buttonContainerStyle={{
          marginTop: 10,
          borderRadius: 5
        }}
        labelStyle={{
          padding: 8,
        }}
        onPress={() => {
          navigation.navigate("DeliveryDetails", { data: item}, navigation)
        }}
      />
    </View>
  );
};

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