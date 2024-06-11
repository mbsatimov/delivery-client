import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  PostPostFailureResponse,
  PostPostRequestConfig,
  PostPostSuccessResponse,
} from '../requests';
import { postPost } from '../requests';

export const usePostMutation = (
  options?: UseMutationOptions<
    PostPostSuccessResponse,
    PostPostFailureResponse,
    PostPostRequestConfig
  >
) =>
  useMutation({
    mutationKey: ['postPost'],
    ...options,
    mutationFn: postPost,
  });
