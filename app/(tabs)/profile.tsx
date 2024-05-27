import { Separator, View } from 'tamagui';

import {
  ProfileAvatar,
  ProfileInfo,
  ProfileMenu,
} from '@/components/screens/Profile';
import { Colors } from '@/utils/constants/colors';
import { Link } from 'expo-router';

const ProfileScreen = () => {
  return (
    <View flex={1} backgroundColor={Colors.light.background}>
      <View padding="$3" flexDirection="row" alignItems="center" gap="$3">
        <ProfileAvatar />
        <ProfileInfo />
      </View>
      <Separator backgroundColor={Colors.light.accent} marginBlock="$1.5" />
      <ProfileMenu />
      <Link href={'/auth/register'}>register</Link>
      <Link href={'/auth/login'}>login</Link>
    </View>
  );
};

export default ProfileScreen;
