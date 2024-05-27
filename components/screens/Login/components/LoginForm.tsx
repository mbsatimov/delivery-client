import { Button, Form, Input, Spinner } from 'tamagui';

import { useLoginForm } from '../hooks';

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();

  return (
    <Form gap="$4" onSubmit={form.handleSubmit(functions.onSubmit)}>
      <Input placeholder="Phone number" {...form.register('phoneNumber')} />
      <Input placeholder="Password" {...form.register('password')} />

      <Form.Trigger asChild>
        <Button
          icon={state.loginMutation.isPending ? () => <Spinner /> : undefined}
        >
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
};
