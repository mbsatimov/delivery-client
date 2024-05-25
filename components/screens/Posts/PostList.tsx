import React from 'react';

import { Colors } from '@/utils/constants/colors';
import { postsData } from '@/utils/constants/fake-data/posts';
import { FlatList } from 'react-native';
import { View } from 'tamagui';
import { PostListItem } from './PostListItem';

export const PostList = () => {
  return (
    <View>
      <FlatList
        data={postsData}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{
          backgroundColor: Colors.light.background,
          padding: 10,
          gap: 10,
          minHeight: '100%',
        }}
      />
    </View>
  );
};
