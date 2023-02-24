import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
// import BingMapsView from 'react-native-bing-maps';

const Map = () => {

  // const mapView = useRef();
  // const [region, setRegion] = useState(null);
  // const [toLoc, setToLoc] = useState(null);
  // const [fromLoc, setFromLoc] = useState(null);
  // const [angle, setAngle] = useState(0);

  // useEffect(() => {
  //   let initialRegion = {
  //     latitude: 1.5496614931250685,
  //     longitude: 110.36381866919922,
  //     latitudeDelta: 0.02,
  //     longitudeDelta: 0.02
  //   }

  //   let destination = {
  //     latitude: 1.5496614931250685,
  //     longitude: 110.36381866919922,
  //   }
  //   let location = {
  //     latitude: 1.5496614931250685,
  //     longitude: 110.36381866919922,
  //   }


  //   setToLoc(destination);
  //   setFromLoc(location);
  //   setRegion(initialRegion);
  // }, [])

  // const renderMap = () =>{
  //   return (
  //     <MapView
  //     ref={mapView}
  //     style={{
  //       flex: 1,
  //     }}
  //     provider={PROVIDER_DEFAULT}
  //     initialRegion={region}
  //     >

  //     </MapView>
  //   );
  // }

  return (
    <View
    style={{
      flex: 1
    }}
    >
      <Text>Map</Text>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 box: {
   height: "100%",
   width: "100%",
   marginVertical: 20,
 },
});
