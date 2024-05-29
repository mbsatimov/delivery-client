import { $api } from '@/utils/api';

export interface PostLoginParams {
  phoneNumber: string;
  password: string;
}

export interface PostLoginSuccessResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
  ok: boolean;
  message?: string;
}

export type PostLoginFailureResponse = ApiErrorResponse;

export type PostLoginRequestConfig = RequestConfig<PostLoginParams>;

export const postLogin = async ({ params, config }: PostLoginRequestConfig) =>
  $api
    .post<PostLoginSuccessResponse>('/login', params, config)
    .then(res => res.data);
