import { addressesData } from './addresses';

export const postsData: Post[] = [
  {
    id: 1,
    status: 'PENDING',
    name: 'Post 1',
    weight: 0.5,
    createdAt: '2022-01-01 07:30:00',
    senderAddress: addressesData[0],
    receiverAddress: addressesData[1],
  },
  {
    id: 2,
    status: 'ACCEPTED',
    name: 'Post 1',
    weight: 0.5,
    createdAt: '2022-01-01 12:00:00',
    senderAddress: addressesData[1],
    receiverAddress: addressesData[2],
  },
  {
    id: 3,
    status: 'REJECTED',
    name: 'Post 1',
    weight: 0.5,
    createdAt: '2022-01-01',
    senderAddress: addressesData[2],
    receiverAddress: addressesData[0],
  },
  {
    id: 4,
    status: 'ACCEPTED',
    name: 'Post 1',
    weight: 0.5,
    createdAt: '2022-01-01',
    senderAddress: addressesData[0],
    receiverAddress: addressesData[1],
  },
  {
    id: 5,
    status: 'REJECTED',
    name: 'Post 5',
    weight: 0.5,
    createdAt: '2022-01-01',
    senderAddress: addressesData[1],
    receiverAddress: addressesData[2],
  },
];
