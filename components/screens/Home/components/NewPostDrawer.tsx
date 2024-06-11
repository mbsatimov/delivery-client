import {
  Drawer,
  DrawerFrame,
  DrawerHandle,
  DrawerOverlay,
} from '@/components/UI';
import { useDrawerClose } from '@/hooks';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { NewPostForm } from './NewPostForm';

type NewPostDrawerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const NewPostDrawer: FC<NewPostDrawerProps> = ({ open, setOpen }) => {
  useDrawerClose({ open, setOpen });

  return (
    <Drawer modal snapPoints={[95]} open={open} onOpenChange={setOpen}>
      <DrawerOverlay />
      <DrawerFrame paddingBlock="$2" paddingInline="$4">
        <DrawerHandle />
        <NewPostForm />
        
      </DrawerFrame>
    </Drawer>
  );
};
