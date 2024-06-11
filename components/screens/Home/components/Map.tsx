import { useDirectionStore } from '@/utils/store';
import { MapPin } from '@tamagui/lucide-icons';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

type MapProps = {};

export const Map: FC<MapProps> = () => {
  const { receiverPlace, setReceiverPlace } = useDirectionStore();

  const onRegionChange = (newRegion: Region) => {
    setReceiverPlace({
      latitude: newRegion.latitude,
      longitude: newRegion.longitude,
      address: '',
      title: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: receiverPlace.latitude,
          longitude: receiverPlace.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        onRegionChangeComplete={onRegionChange}
        provider={PROVIDER_GOOGLE}
        loadingEnabled
      ></MapView>
      <MapPin size={50} style={styles.marker} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: { width: '100%', height: '100%' },
  marker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 10,
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
