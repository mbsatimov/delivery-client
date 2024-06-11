import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { usePostMutation } from '@/utils/api/hooks/usePostMutation';
import {
  NewPostFormScheme,
  newPostFormSchema,
} from '../constants/newPostFormScheme';

type UseNewPostForm = {
  senderPlace: Place;
  receiverPlace: Place;
};

export const useNewPostForm = ({
  senderPlace,
  receiverPlace,
}: UseNewPostForm) => {
  const form = useForm<NewPostFormScheme>({
    resolver: zodResolver(newPostFormSchema()),
    defaultValues: {
      senderAddress: senderPlace,
      receiverAddress: receiverPlace,
    },
  });

  const postMutation = usePostMutation({
    onSuccess: res => {
      if (!res.ok) {
        throw new Error(res.message);
      } else {
        console.log(res.data);
      }
    },
  });

  const onSubmit = (values: NewPostFormScheme) => {
    console.log(values);
  };

  return {
    state: { postMutation },
    form,
    functions: { onSubmit },
  };
};
