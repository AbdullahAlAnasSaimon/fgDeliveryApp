import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryOrders } from '../hooks/useDeliveryOrders';
import Loader from '../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';

const PendingDelivery = () => {

  const {user} = useContext(StateContext);
  const [deliveryOrders, orderLoading, orderRefetch] = useDeliveryOrders(user?.email);
  const filtered = deliveryOrders?.data?.filter(order => order.pick == 'Already Picked');

  if(orderLoading){
    return <Loader/>
  }
  orderRefetch();

  return (
    <View>
      <Text style={{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 700
      }}>Pending Delivery: {filtered?.length}</Text>
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

export default PendingDelivery;

const styles = StyleSheet.create({});