import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  PostRegisterFailureResponse,
  PostRegisterRequestConfig,
  PostRegisterSuccessResponse,
} from '../requests';
import { postRegister } from '../requests';

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
