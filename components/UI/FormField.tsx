import React from 'react';
import { Label, Text, View } from 'tamagui';

import { Colors } from '@/utils/constants';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

type FormFieldProps<TFieldValues extends FieldValues = FieldValues> =
  ControllerProps<TFieldValues> & {
    label?: string;
    errorMsg?: string;
  };

export const FormField = <TFieldValues extends FieldValues = FieldValues>({
  label,
  errorMsg,
  ...props
}: FormFieldProps<TFieldValues>) => {
  return (
    <View>
      {!!label && (
        <Label color={errorMsg ? Colors.light.danger : Colors.light.primary}>
          {label}
        </Label>
      )}
      <Controller {...props} />
      {!!errorMsg && <Text color={Colors.light.danger}>{errorMsg}</Text>}
    </View>
  );
};
