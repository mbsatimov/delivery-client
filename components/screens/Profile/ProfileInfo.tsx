import { Colors } from '@/utils/constants/colors';
import React from 'react';
import { Text, View } from 'tamagui';

export const ProfileInfo = () => {
  return (
    <View>
      <Text fontWeight={500}>Mahkambek Satimov</Text>
      <Text color={Colors.light.mutedForeground}>+998 90 123 45 67</Text>
    </View>
  );
};
