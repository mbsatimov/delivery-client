import { PlacesDrawer } from '@/components';
import { usePostStore } from '@/utils/store/usePostStore';
import { Sheet } from '@tamagui/sheet';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { Button } from 'tamagui';

export const CoordinatesSheet = () => {
  const { receiverAddress, senderAddress } = usePostStore();

  const [fromSheetOpen, setFromSheetOpen] = useState(false);
  const [toSheetOpen, setToSheetOpen] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (fromSheetOpen || toSheetOpen) {
        setFromSheetOpen(false);
        setToSheetOpen(false);
        return true; // Prevent default behavior (exit app)
      }
      return false; // Allow default behavior (exit app)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [fromSheetOpen, toSheetOpen]);

  return (
    <>
      <Sheet
        open={true}
        snapPoints={[35]}
        disableDrag
        dismissOnOverlayPress={false}
      >
        <Sheet.Handle marginInline="40%" />
        <Sheet.Frame padding="$4" alignItems="center" gap="$4">
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
          <PlacesDrawer open={fromSheetOpen} onOpenChange={setFromSheetOpen} />
          <PlacesDrawer open={toSheetOpen} onOpenChange={setToSheetOpen} />
        </Sheet.Frame>
      </Sheet>
    </>
  );
};
