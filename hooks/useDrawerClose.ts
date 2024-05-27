import { Dispatch, SetStateAction, useEffect } from 'react';
import { BackHandler } from 'react-native';

type UseDrawerCloseProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useDrawerClose = ({ open, setOpen }: UseDrawerCloseProps) => {
  useEffect(() => {
    const backAction = () => {
      if (open) {
        setOpen(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
};
