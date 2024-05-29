import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  PostLoginFailureResponse,
  PostLoginRequestConfig,
  PostLoginSuccessResponse,
} from '../requests';
import { postLogin } from '../requests';

export const useLoginMutation = (
  options?: UseMutationOptions<
    PostLoginSuccessResponse,
    PostLoginFailureResponse,
    PostLoginRequestConfig
  >
) =>
  useMutation({
    mutationKey: ['postLogin'],
    ...options,
    mutationFn: postLogin,
  });
