import * as z from 'zod';

const addressSchema = z.object({
  address: z.string().min(1, { message: 'Address is required' }),
  latitude: z.number(),
  longitude: z.number(),
  title: z.string().min(1, { message: 'Title is required' }),
  entrance: z.string().optional(),
  floor: z.string().optional(),
  apartment: z.string().optional(),
  doorCode: z.string().optional(),
});

export const newPostFormSchema = () =>
  z.object({
    senderAddress: addressSchema,
    receiverAddress: addressSchema,
    weight: z
      .string()
      .min(1, {
        message: 'Weight is required',
      })
      .max(5, {
        message: 'Weight must be less than 5 characters',
      }),
    name: z.string().optional(),
    pictureUrl: z.string().optional(),
    description: z.string().optional(),
  });

export type NewPostFormScheme = z.infer<ReturnType<typeof newPostFormSchema>>;
