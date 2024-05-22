import MapView, { Region } from 'react-native-maps';
import { create } from 'zustand';

type MapState = {
  mapViewRef: React.RefObject<MapView>;
  region: Region;
};

type MapAction = {
  setRegion: (region: Region) => void;
};

export const useMapStore = create<MapState & MapAction>(set => ({
  mapViewRef: { current: null },
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  setRegion: (region: Region) => set({ region }),
}));
