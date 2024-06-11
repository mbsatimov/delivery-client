import { $api } from '@/utils/api';

export interface PostRegisterParams extends Omit<User, 'id'> {}

export interface PostRegisterSuccessResponse {
  data: {
    token: string;
    user: User;
  };
  ok: boolean;
  message?: string;
}

export type PostRegisterFailureResponse = ApiErrorResponse;

export type PostRegisterRequestConfig = RequestConfig<PostRegisterParams>;

export const postRegister = async ({
  params,
  config,
}: PostRegisterRequestConfig) =>
  $api
    .post<PostRegisterSuccessResponse>('/register', params, config)
    .then(res => res.data);
