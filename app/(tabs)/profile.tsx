import { ProfileAvatar } from '@/components/screens/Profile/ProfileAvatar';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <ProfileAvatar />
      </View>
      <Text>Tab Settings</Text>
    </View>
  );
};

export default ProfileScreen;
