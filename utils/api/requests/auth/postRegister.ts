import { $api } from '@/utils/api';

export interface PostRegisterParams extends Omit<User, 'id'> {}

export interface PostRegisterSuccessResponse {
  token: string;
  user: User;
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
