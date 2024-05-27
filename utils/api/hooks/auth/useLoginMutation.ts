import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  PostLoginFailureResponse,
  PostLoginRequestConfig,
  PostLoginSuccessResponse,
} from '@/utils/api';
import { postLogin } from '@/utils/api';

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
