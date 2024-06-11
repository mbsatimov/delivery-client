import { Colors } from '@/utils/constants';
import React, { FC, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button as TamaguiButton,
  TamaguiElement,
  type ButtonProps as TamaguiButtonProps,
} from 'tamagui';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ButtonProps = Omit<TamaguiButtonProps, 'variant'> & {
  variant?: ButtonVariants;
};

export const Button: FC<ButtonProps> = forwardRef<TamaguiElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return (
      <TamaguiButton
        style={[styles.button, styles[variant]]}
        ref={ref}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    color: Colors.light.foreground,
    borderRadius: 20,
    height: 60,
    fontSize: 20,
  },
  primary: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.primaryForeground,
  },
  secondary: {
    backgroundColor: Colors.light.secondary,
    color: Colors.light.secondaryForeground,
  },
  tertiary: {
    backgroundColor: Colors.light.tertiary,
    color: Colors.light.tertiaryForeground,
  },
  danger: {
    backgroundColor: Colors.light.danger,
    color: Colors.light.dangerForeground,
  },
});

Button.displayName = 'Button';
