import { Separator, View } from 'tamagui';

import {
  ProfileAvatar,
  ProfileInfo,
  ProfileMenu,
} from '@/components/screens/Profile';
import { Colors } from '@/utils/constants/colors';

const ProfileScreen = () => {
  return (
    <View flex={1} backgroundColor={Colors.light.background}>
      <View padding="$3" flexDirection="row" alignItems="center" gap="$3">
        <ProfileAvatar />
        <ProfileInfo />
      </View>
      <Separator backgroundColor={Colors.light.accent} marginBlock="$1.5" />
      <ProfileMenu />
    </View>
  );
};

export default ProfileScreen;
