import React, { FC, useState } from 'react';
import { Card, H4, Text } from 'tamagui';

import { Badge } from '@/components/UI';
import { Colors } from '@/utils/constants/colors';
import { postsData } from '@/utils/constants/fake-data/posts';
import { MoveRight } from '@tamagui/lucide-icons';
import { PostDetailsDrawer } from './PostDetailsDrawer';

type PostListItemProps = {
  post: Post;
};

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      <Card
        key={post.id}
        bordered
        borderRadius={20}
        borderColor={Colors.light.border}
        backgroundColor={Colors.light.background}
        animation="bouncy"
        pressStyle={{ scale: 0.95 }}
        onPress={() => setOpenDetails(true)}
      >
        <Card.Header padded flexDirection="row" justifyContent="space-between">
          <H4>#{post.id}</H4>
          <Badge variant="success">{post.status}</Badge>
        </Card.Header>
        <Card.Footer padded justifyContent="space-between">
          <Text>{post.senderAddress.address}</Text>
          <MoveRight />
          <Text>{post.receiverAddress.address}</Text>
        </Card.Footer>
      </Card>
      <PostDetailsDrawer
        post={postsData[0]}
        open={openDetails}
        setOpen={setOpenDetails}
      />
    </>
  );
};
