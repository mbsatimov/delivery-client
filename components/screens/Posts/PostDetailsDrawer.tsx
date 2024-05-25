import { format } from 'date-fns';
import React, { FC } from 'react';
import { H4, Image, Separator, Sheet, SheetProps, Text, View } from 'tamagui';

import { Badge } from '@/components/UI';
import { MoveDown } from '@tamagui/lucide-icons';

type PostDetailsDrawerProps = SheetProps & {
  post: Post;
};

export const PostDetailsDrawer: FC<PostDetailsDrawerProps> = ({
  post,
  ...props
}) => {
  return (
    <Sheet
      animation="medium"
      modal
      snapPoints={[95]}
      dismissOnSnapToBottom
      {...props}
    >
      <Sheet.Overlay
        animation="medium"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle marginInline="40%" />
      <Sheet.Frame padding="$4" flex={1}>
        <View alignItems="flex-end" marginBottom="$4">
          <Badge variant="success">{post.status}</Badge>
        </View>
        <Text fontWeight={500} fontSize={20}>
          {format(post.createdAt, 'dd MMM yyyy, HH:mm')}
        </Text>
        <Separator marginBlock="$4" />
        <H4>{post.name}</H4>
        <Separator marginBlock="$4" />
        {post.pictureUrl && (
          <>
            <Image src={post.pictureUrl} />
            <Separator marginBlock="$4" />
          </>
        )}
        <View flexDirection="row" gap="$2" alignItems="center">
          <View>
            <MoveDown />
          </View>
          <View flex={1}>
            <Text>{post.senderAddress.address}</Text>
            <Separator marginBlock="$4" />
            <Text>{post.receiverAddress.address}</Text>
          </View>
        </View>
        <Separator marginBlock="$4" />
      </Sheet.Frame>
    </Sheet>
  );
};
