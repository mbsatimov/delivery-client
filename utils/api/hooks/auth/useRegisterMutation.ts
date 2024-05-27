import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  PostRegisterFailureResponse,
  PostRegisterRequestConfig,
  PostRegisterSuccessResponse,
} from '@/utils/api';
import { postRegister } from '@/utils/api';

export const useRegisterMutation = (
  options?: UseMutationOptions<
    PostRegisterSuccessResponse,
    PostRegisterFailureResponse,
    PostRegisterRequestConfig
  >
) =>
  useMutation({
    mutationKey: ['postRegister'],
    ...options,
    mutationFn: postRegister,
  });
