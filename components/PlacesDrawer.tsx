import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input } from 'tamagui';

import {
  Drawer,
  DrawerFrame,
  DrawerHandle,
  DrawerOverlay,
} from '@/components/UI';
import { useDrawerClose } from '@/hooks';
import { useMapStore } from '@/utils/store';

type PlacesDrawerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const PlacesDrawer = ({ open, setOpen, ...props }: PlacesDrawerProps) => {
  const { region } = useMapStore();
  const [value, setValue] = useState<string>('');
  useDrawerClose({ open, setOpen });

  const handleSearchInputChange = async (text: string) => {
    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
    const input = text.trim();
    const location = `${region.latitude},${region.longitude}&radius=2000`;
    const url = `${googleApiUrl}?query=${input}&location=${location}&key=&callback=initMap`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearchInputChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Drawer
      modal
      snapPoints={[95]}
      {...props}
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerOverlay />
      <DrawerFrame paddingBlock="$2" paddingInline="$4" flex={1}>
        <DrawerHandle />
        <Input
          value={value}
          onChange={e => setValue(e.nativeEvent.text)}
          height={50}
          width={'100%'}
        />
      </DrawerFrame>
    </Drawer>
  );
};

export { PlacesDrawer };
