import * as z from 'zod';

export const registerFormScheme = () =>
  z.object({
    firstName: z
      .string()
      .min(1, {
        message: 'First name is required',
      })
      .max(25, {
        message: 'First name must be less than 25 characters',
      }),
    lastName: z
      .string()
      .min(1, {
        message: 'Last name is required',
      })
      .max(25, {
        message: 'Last name must be less than 25 characters',
      }),
    phoneNumber: z
      .string()
      .min(1, {
        message: 'Phone number is required',
      })
      .startsWith('+998', {
        message: 'Phone number must start with +998',
      }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

export type RegisterFormScheme = z.infer<ReturnType<typeof registerFormScheme>>;
