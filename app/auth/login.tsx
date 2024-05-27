import React from 'react';
import { SafeAreaView } from 'react-native';
import { H1, Text, View } from 'tamagui';

import { LoginForm } from '@/components/screens/Login/components';
import { Colors, ROUTE } from '@/utils/constants';
import { Link } from 'expo-router';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        backgroundColor={Colors.light.background}
        flex={1}
        paddingInline="$4"
        paddingTop="$20"
        paddingBottom="$8"
      >
        <Text fontSize={18}>Welcome</Text>
        <H1 marginBottom="$8">Login</H1>
        <LoginForm />
        <View flex={1} justifyContent="flex-end" alignItems="center">
          <Text color={Colors.light.mutedForeground}>
            Don't have an account?{' '}
            <Link href={ROUTE.REGISTER}>
              <Text color={Colors.light.primary}>Register</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
