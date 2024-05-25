enum PostStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

interface Post {
  id: number;
  pictureUrl?: string;
  description?: string;
  createdAt: string;
  name: string;
  weight: number;
  status: PostStatus;
  senderAddress: Address;
  receiverAddress: Address;
}
