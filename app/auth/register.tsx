import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { H1, Text, View } from 'tamagui';

import { RegisterForm } from '@/components/screens/Register/components';
import { Colors, ROUTE } from '@/utils/constants';

const RegisterScreen = () => {
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
        <H1 marginBottom="$8">Register</H1>
        <RegisterForm />
        <View flex={1} justifyContent="flex-end" alignItems="center">
          <Text color={Colors.light.mutedForeground}>
            Do you have an account?{' '}
            <Link href={ROUTE.LOGIN}>
              <Text color={Colors.light.primary}>Login</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
