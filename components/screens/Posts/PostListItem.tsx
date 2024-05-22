import React, { FC } from 'react';
import { Card, H4, Text } from 'tamagui';

import { Badge } from '@/components/UI';
import { Post } from '@/types/post';
import { MoveRight } from '@tamagui/lucide-icons';

type PostListItemProps = {
  post: Post;
};

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  return (
    <Card
      elevate
      size="$4"
      bordered
      key={post.id}
      animation="bouncy"
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.95 }}
    >
      <Card.Header padded flexDirection="row" justifyContent="space-between">
        <H4>{post.id}</H4>
        <Badge variant="success">{post.status}</Badge>
      </Card.Header>
      <Card.Footer padded justifyContent="space-between">
        <Text>{post.senderAddress.address}</Text>
        <MoveRight />
        <Text>{post.receiverAddress.address}</Text>
      </Card.Footer>
    </Card>
  );
};
