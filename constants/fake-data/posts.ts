import { Post, PostStatus } from '@/types/post';
import { addressesData } from './addresses';

export const postsData: Post[] = [
  {
    id: 1,
    status: PostStatus.PENDING,
    senderAddress: addressesData[0],
    receiverAddress: addressesData[1],
  },
  {
    id: 2,
    status: PostStatus.ACCEPTED,
    senderAddress: addressesData[1],
    receiverAddress: addressesData[2],
  },
];
