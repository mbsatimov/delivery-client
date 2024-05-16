import { Stack } from 'expo-router';
import aa from '../app/index'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
