import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { Header, TextButton } from '../components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons, SIZES } from '../constants';

const DropOff = ({route}) => {
  const navigation = useNavigation();
  const { _id, address, name, email, order_products, total_price, paid, pick } = route.params.data;

  const handleDropOff = id =>{
    const status = "Product Delivery Completed";

    fetch(`https://fg-server.vercel.app/delivery-complete/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === true) {
          navigation.navigate("Home");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: COLORS.white
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 65,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center'
        }}
        title={"Drop Off"}
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
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.title}>{_id}</Text>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text style={styles.title}>Address: {address}</Text>
          <Text style={styles.price}>Total: {total_price}৳ </Text>
          <Text style={styles.price}>{!paid ? "Collect Cash" : "Paid"}</Text>
          {/* <View> */}
          {order_products?.map(order => <DropOffCard key={order?._id} order={order} />)}
          {/* </View> */}
        </View>
      </ScrollView >
      <TextButton
        label="Drop Off"
        onPress={() => handleDropOff(_id)}
        buttonContainerStyle={{
          height: 55,
          width: '100%',
          backgroundColor: COLORS.primary,
          position: 'absolute',
          bottom: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3
        }}
      />
    </View>
  )
}

export default DropOff;

const DropOffCard = ({ order }) => {
  return (
    <View style={styles.card2}>
      <View style={styles.textContainer2}>
        <Image
          source={{ uri: order.imageUrl }}
          style={styles.image2} />
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title2}>{order.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    zIndex: -9999,
    marginBottom: 50
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.primary
  },
  card2: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  image2: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: COLORS.gray
  },
  textContainer2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray2,
    padding: 10
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description2: {
    fontSize: 16,
  },
});


