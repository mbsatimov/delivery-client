import { PostList } from '@/components/screens/Posts/PostList';
import React from 'react';
import { SafeAreaView } from 'react-native';

const PostsScreen = () => {
  return (
    <SafeAreaView>
      <PostList />
    </SafeAreaView>
  );
};

export default PostsScreen;
