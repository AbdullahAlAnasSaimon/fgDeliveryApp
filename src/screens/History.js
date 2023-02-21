import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { StateContext } from '../context/AuthContext'
import { useDeliveryHistory } from '../hooks/useDeliveryHistory'
import { ScrollView } from 'react-native-gesture-handler'

const History = () => {
  const { user } = useContext(StateContext)
  const [deliveriedHistory, deliveredLoading, deliveryRefetch] = useDeliveryHistory(user?.email);
  console.log(deliveriedHistory.length);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* <Text>History {deliveriedHistory.length}</Text> */}
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
      <Text style={styles.title}></Text>
      <Text></Text>
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
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});