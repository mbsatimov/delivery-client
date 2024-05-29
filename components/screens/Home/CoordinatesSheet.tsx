import { PlacesDrawer } from '@/components';
import { Drawer, DrawerFrame, DrawerHandle } from '@/components/UI';
import { usePostStore } from '@/utils/store';
import { useState } from 'react';
import { Button, View } from 'tamagui';

export const CoordinatesSheet = () => {
  const { receiverAddress, senderAddress } = usePostStore();

  const [fromSheetOpen, setFromSheetOpen] = useState(false);
  const [toSheetOpen, setToSheetOpen] = useState(false);

  return (
    <>
      <Drawer
        open={true}
        snapPoints={[35]}
        disableDrag
        dismissOnOverlayPress={false}
      >
        <DrawerFrame paddingBlock="$2" paddingInline="$4">
          <DrawerHandle />
          <View gap="$3">
            <Button
              height={50}
              justifyContent="flex-start"
              width={'100%'}
              onPress={() => setFromSheetOpen(true)}
            >
              {senderAddress.address}
            </Button>
            <Button
              height={50}
              width={'100%'}
              justifyContent="flex-start"
              onPress={() => setToSheetOpen(true)}
            >
              {receiverAddress.address}
            </Button>
          </View>
          <PlacesDrawer open={fromSheetOpen} setOpen={setFromSheetOpen} />
          <PlacesDrawer open={toSheetOpen} setOpen={setToSheetOpen} />
        </DrawerFrame>
      </Drawer>
    </>
  );
};
