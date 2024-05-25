import { SafeAreaView } from 'react-native';

import { CoordinatesSheet, Map } from '@/components/screens/Home';
import { useCurrentLocation } from '@/hooks';

const HomeScreen = () => {
  const { location } = useCurrentLocation();

  console.log(location);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map location={location} />
      <CoordinatesSheet />
    </SafeAreaView>
  );
};

export default HomeScreen;
