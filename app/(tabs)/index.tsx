import { CoordinatesSheet, Map } from '@/components/screens';
import { useCurrentLocation } from '@/hooks';
import { SafeAreaView } from 'react-native';

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
