import { Address } from './address';

export enum PostStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export interface Post {
  id: number;
  pictureUrl?: string;
  description?: string;
  name?: string;
  status: PostStatus;
  senderAddress: Address;
  receiverAddress: Address;
}
