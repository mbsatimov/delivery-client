import { Colors } from '@/utils/constants';
import React, { ComponentProps, Dispatch, SetStateAction } from 'react';
import { Sheet } from 'tamagui';

export type DrawerProps = ComponentProps<typeof Sheet> & {
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const Drawer = ({ ...props }: DrawerProps) => (
  <Sheet animation="medium" dismissOnSnapToBottom {...props} />
);

export type DrawerOverlayProps = ComponentProps<typeof Sheet.Overlay> & {};

export const DrawerOverlay = ({ ...props }: DrawerOverlayProps) => (
  <Sheet.Overlay
    animation="medium"
    enterStyle={{ opacity: 0 }}
    exitStyle={{ opacity: 0 }}
    {...props}
  />
);

export type DrawerHandleProps = ComponentProps<typeof Sheet.Handle> & {};

export const DrawerHandle = ({ ...props }: DrawerHandleProps) => (
  <Sheet.Handle
    backgroundColor={Colors.light.primary}
    marginInline="40%"
    {...props}
  />
);

export type DrawerFrameProps = ComponentProps<typeof Sheet.Frame> & {};

export const DrawerFrame = ({ ...props }) => <Sheet.Frame {...props} />;
