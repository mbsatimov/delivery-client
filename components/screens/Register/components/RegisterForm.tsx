import { Button, Form, Input, Spinner } from 'tamagui';
import { useRegisterForm } from '../hooks';

export const RegisterForm = () => {
  const { state, form, functions } = useRegisterForm();

  return (
    <Form gap="$4" onSubmit={form.handleSubmit(functions.onSubmit)}>
      <Input placeholder="First name" {...form.register('firstName')} />
      <Input placeholder="Last name" {...form.register('lastName')} />
      <Input placeholder="Phone number" {...form.register('phoneNumber')} />
      <Input placeholder="Password" {...form.register('password')} />

      <Form.Trigger asChild>
        <Button
          icon={
            state.registerMutation.isPending ? () => <Spinner /> : undefined
          }
        >
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
};
