import { Address } from '@/types/address';
import { create } from 'zustand';

type PostState = {
  name?: string;
  description?: string;
  picture?: string;
  senderAddress: Address;
  receiverAddress: Address;
};

type PostAction = {
  setReceiverAddress: (address: Address) => void;
  setSenderAddress: (address: Address) => void;
  setPost: (post: PostState) => void;
};

export const usePostStore = create<PostState & PostAction>(set => ({
  receiverAddress: {
    address: '',
    latitude: 0,
    longitude: 0,
  },
  senderAddress: {
    address: '',
    latitude: 0,
    longitude: 0,
  },
  setPost: (post: PostState) => set(post),
  setReceiverAddress: (address: Address) => set({ receiverAddress: address }),
  setSenderAddress: (address: Address) => set({ senderAddress: address }),
}));
