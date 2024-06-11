import * as z from 'zod';

export const loginFormScheme = () =>
  z.object({
    phoneNumber: z
      .string()
      .min(1, {
        message: 'Phone number is required',
      })
      .startsWith('+998', {
        message: 'Phone number must start with +998',
      })
      .length(13, {
        message: 'Phone number must be 13 characters',
      }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

export type LoginFormScheme = z.infer<ReturnType<typeof loginFormScheme>>;
