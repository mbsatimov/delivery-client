import { $api } from '@/utils/api';

export interface PostRefreshSuccessResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type PostRefreshFailureResponse = ApiErrorResponse;

export type PostRefreshRequestConfig = RequestConfig;

export const postRefresh = async ({ config }: PostRefreshRequestConfig) =>
  $api
    .post<PostRefreshSuccessResponse>('/refresh', config)
    .then(res => res.data);
