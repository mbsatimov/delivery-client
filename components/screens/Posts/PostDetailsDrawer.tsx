import { format } from 'date-fns';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { H4, Image, Separator, Text, View } from 'tamagui';

import {
  Badge,
  Drawer,
  DrawerFrame,
  DrawerHandle,
  DrawerOverlay,
} from '@/components/UI';
import { useDrawerClose } from '@/hooks';
import { MoveDown } from '@tamagui/lucide-icons';

type PostDetailsDrawerProps = {
  post: Post;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const PostDetailsDrawer: FC<PostDetailsDrawerProps> = ({
  open,
  setOpen,
  post,
  ...props
}) => {
  useDrawerClose({ open, setOpen });

  return (
    <Drawer
      modal
      snapPoints={[95]}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <DrawerOverlay />
      <DrawerFrame paddingBlock="$2" paddingInline="$4" flex={1}>
        <DrawerHandle />
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
      </DrawerFrame>
    </Drawer>
  );
};
