import React from 'react';
import { SafeAreaView } from 'react-native';

import { PostList } from '@/components/screens/Posts';

const PostsScreen = () => {
  return (
    <SafeAreaView>
      <PostList />
    </SafeAreaView>
  );
};

export default PostsScreen;
