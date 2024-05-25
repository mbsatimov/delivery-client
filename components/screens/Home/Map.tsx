import { useMapStore } from '@/utils/store/useMapStore';
import { MapPin } from '@tamagui/lucide-icons';
import * as Location from 'expo-location';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

type MapProps = {
  location: Location.LocationObjectCoords | null;
};

export const Map: FC<MapProps> = ({ location }) => {
  const { mapViewRef: ref, setRegion } = useMapStore();

  if (!location) return null;

  const onRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={ref}
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
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
