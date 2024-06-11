import { Dispatch, SetStateAction, useEffect } from 'react';
import { Input } from 'tamagui';

import {
  Drawer,
  DrawerFrame,
  DrawerHandle,
  DrawerOverlay,
} from '@/components/UI';
import { useDrawerClose } from '@/hooks';

type PlacesDrawerProps = {
  place: Place;
  setPlace: (place: Place) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const PlacesDrawer = ({
  place,
  setPlace,
  open,
  setOpen,
}: PlacesDrawerProps) => {
  useDrawerClose({ open, setOpen });

  const handleSearchInputChange = async () => {
    // const googleApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
    // const input = text.trim();
    // const location = `${place.latitude},${place.longitude}&radius=2000`;
    // const url = `${googleApiUrl}?query=${input}&location=${location}&key=${'AIzaSyBh8ba_8KXS5AbYyYm1TI2CjzLUvtMZtwo'}&callback=initMap`;
    // try {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Drawer modal snapPoints={[95]} open={open} onOpenChange={setOpen}>
      <DrawerOverlay />
      <DrawerFrame paddingBlock="$2" paddingInline="$4" flex={1}>
        <DrawerHandle />
        <Input
          value={place.address}
          onChangeText={text => setPlace({ ...place, address: text })}
          height={50}
          width={'100%'}
        />
      </DrawerFrame>
    </Drawer>
  );
};

export { PlacesDrawer };
