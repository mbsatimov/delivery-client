import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';

import { useRegisterMutation } from '@/utils/api';
import { ROUTE } from '@/utils/constants';
import { useUserStore } from '@/utils/store';

import { RegisterFormScheme, registerFormScheme } from '../constants';

export const useRegisterForm = () => {
  const router = useRouter();
  const setUser = useUserStore(state => state.setUser);

  const form = useForm<RegisterFormScheme>({
    resolver: zodResolver(registerFormScheme()),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
    },
    mode: 'onChange',
  });

  const registerMutation = useRegisterMutation({
    onSuccess: res => {
      setUser(res.data.user);
      router.push(ROUTE.HOME);
    },
  });

  const onSubmit = (values: RegisterFormScheme) => {
    registerMutation.mutate({ params: values });
  };

  return {
    state: {
      registerMutation,
    },
    form,
    functions: { onSubmit },
  };
};
