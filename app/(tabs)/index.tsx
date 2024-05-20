import { CoordinatesSheet } from '@/components/screens';
import { View } from 'react-native';

export default function Tab() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* <Map /> */}
      <CoordinatesSheet />
    </View>
  );
}
