import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { Button, Form, Input, Spinner, View } from 'tamagui';

import { FormField } from '@/components/UI';

import { useLoginForm } from '../hooks';

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form gap="$4" onSubmit={form.handleSubmit(functions.onSubmit)}>
      <FormField
        name="phoneNumber"
        control={form.control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Phone number"
            value={value}
            onChangeText={value => onChange(value)}
            inputMode="tel"
          />
        )}
        errorMsg={form.formState.errors.phoneNumber?.message}
      />
      <FormField
        name="password"
        control={form.control}
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              placeholder="Password"
              value={value}
              onChangeText={value => onChange(value)}
              secureTextEntry={!showPassword}
            />
            <View position="absolute" right={12} top={10}>
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {!showPassword && <Eye />}
                {showPassword && <EyeOff />}
              </Pressable>
            </View>
          </>
        )}
        errorMsg={form.formState.errors.password?.message}
      />

      <Form.Trigger asChild>
        <Button
          icon={state.loginMutation.isPending ? () => <Spinner /> : undefined}
          disabled={state.loginMutation.isPending || !form.formState.isValid}
        >
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
};
