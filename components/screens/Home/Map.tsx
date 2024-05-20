// // import MapView from 'react-native-maps';
// import * as Location from 'expo-location';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import { View } from 'tamagui';

// export const Map = () => {
//   const [location, setLocation] =
//     useState<Location.LocationObjectCoords | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     })();
//   }, []);

//   if (!location) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//           }}
//           title="You are here"
//         />
//       </MapView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });
