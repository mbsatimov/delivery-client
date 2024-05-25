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
      borderRadius="$4"
      paddingInline="$2.5"
      alignItems="center"
      justifyContent="center"
      width={120}
      height={24}
      style={[styles[variant]]}
      {...props}
    >
      <Text fontSize={12} style={{ color: 'inherit' }}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  danger: {
    backgroundColor: 'red',
    color: 'white',
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
    color: 'white',
  },
});
