import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ViewProps } from 'tamagui';

type Variants = 'danger' | 'success' | 'warning' | 'info' | 'primary';

type BadgeProps = ViewProps & {
  children: React.ReactNode;
  variant?: Variants;
};

export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <View
      borderRadius="$2"
      paddingInline="$2.5"
      alignItems="center"
      justifyContent="center"
      style={[styles[variant]]}
      {...props}
    >
      <Text fontSize={12}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  danger: {
    backgroundColor: 'red',
  },
  success: {
    backgroundColor: 'lightgreen',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  info: {
    backgroundColor: 'lightblue',
  },
  primary: {
    backgroundColor: 'green',
  },
});
