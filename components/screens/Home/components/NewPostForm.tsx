import { useDirectionStore } from '@/utils/store';
import React from 'react';
import { Form } from 'tamagui';
import { useNewPostForm } from '../hooks/useNewPostForm';
import { DirectionSelect } from './DirectionSelect';

export const NewPostForm = () => {
  const { receiverPlace, senderPlace } = useDirectionStore();
  const { state, form, functions } = useNewPostForm({
    receiverPlace,
    senderPlace,
  });

  return (
    <Form gap="$4" onSubmit={form.handleSubmit(functions.onSubmit)}>
      <DirectionSelect />
    </Form>
  );
};
