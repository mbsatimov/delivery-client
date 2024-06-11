import { SafeAreaView } from 'react-native';

import { DirectionDrawer, Map } from '@/components/screens/Home';
import { useCurrentLocation } from '@/hooks';
import { useDirectionStore } from '@/utils/store';
import { useEffect } from 'react';

const HomeScreen = () => {
  const { location } = useCurrentLocation();
  const { senderPlace, setSenderPlace } = useDirectionStore();

  useEffect(() => {
    if (location) {
      setSenderPlace({ ...senderPlace, ...location });
    }
  }, [location]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map />
      <DirectionDrawer />
    </SafeAreaView>
  );
};

export default HomeScreen;
