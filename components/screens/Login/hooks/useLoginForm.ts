import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';

import { useLoginMutation } from '@/utils/api';
import { ROUTE } from '@/utils/constants';
import { useUserStore } from '@/utils/store';

import { LoginFormScheme, loginFormScheme } from '../constants';

export const useLoginForm = () => {
  const router = useRouter();
  const setUser = useUserStore(state => state.setUser);

  const form = useForm<LoginFormScheme>({
    resolver: zodResolver(loginFormScheme()),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const loginMutation = useLoginMutation({
    onSuccess: data => {
      setUser(data.user);
      router.push(ROUTE.HOME);
    },
  });

  const onSubmit = (values: LoginFormScheme) => {
    loginMutation.mutate({ params: values });
  };

  return {
    state: {
      loginMutation,
    },
    form,
    functions: { onSubmit },
  };
};
