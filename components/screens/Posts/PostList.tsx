import React from 'react';
import { ScrollView, View, YStack } from 'tamagui';

import { postsData } from '@/constants/fake-data/posts';
import { PostListItem } from './PostListItem';

export const PostList = () => {
  return (
    <View>
      <ScrollView>
        <YStack gap="$3" paddingBlock="$3" paddingInline="$2">
          {postsData.map(post => (
            <PostListItem key={post.id} post={post} />
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};
