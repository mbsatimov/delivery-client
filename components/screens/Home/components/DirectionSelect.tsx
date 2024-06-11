import React, { useState } from 'react';
import { Button, View } from 'tamagui';

import { PlacesDrawer } from '@/components';
import { useDirectionStore } from '@/utils/store';

export const DirectionSelect = () => {
  const [fromDrawerOpen, setFromDrawerOpen] = useState(false);
  const [toDrawerOpen, setToDrawerOpen] = useState(false);
  const { receiverPlace, senderPlace, setReceiverPlace, setSenderPlace } =
    useDirectionStore();

  return (
    <>
      <View gap="$3">
        <Button
          height={50}
          justifyContent="flex-start"
          onPress={() => setFromDrawerOpen(true)}
        >
          {senderPlace.address}
        </Button>
        <Button
          height={60}
          justifyContent="flex-start"
          onPress={() => setToDrawerOpen(true)}
        >
          {receiverPlace.address}
        </Button>
      </View>
      <PlacesDrawer
        place={senderPlace}
        setPlace={setSenderPlace}
        open={fromDrawerOpen}
        setOpen={setFromDrawerOpen}
      />
      <PlacesDrawer
        place={receiverPlace}
        setPlace={setReceiverPlace}
        open={toDrawerOpen}
        setOpen={setToDrawerOpen}
      />
    </>
  );
};
