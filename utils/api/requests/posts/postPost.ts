import { $api } from '../../instance';

export interface PostPostParams {
  title: string;
  content: string;
  image?: string;
}

export interface PostPostSuccessResponse {
  data: {
    post: Post;
  };
  ok: boolean;
  message?: string;
}

export type PostPostFailureResponse = ApiErrorResponse;

export type PostPostRequestConfig = RequestConfig<PostPostParams>;

export const postPost = async ({ params, config }: PostPostRequestConfig) =>
  $api
    .post<PostPostSuccessResponse>('/posts', params, config)
    .then(res => res.data);
