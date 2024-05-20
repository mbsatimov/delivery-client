import { InnerSheet } from '@/components/screens/Home/SelectAddressSheet';
import { Sheet } from '@tamagui/sheet';
import { useState } from 'react';
import { Button } from 'tamagui';

export const CoordinatesSheet = () => {
  const [fromSheetOpen, setFromSheetOpen] = useState(false);
  const [toSheetOpen, setToSheetOpen] = useState(false);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

  return (
    <>
      <Sheet
        open={true}
        snapPoints={[55]}
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
            {from}
          </Button>
          <Button
            height={50}
            width={'100%'}
            justifyContent="flex-start"
            onPress={() => setToSheetOpen(true)}
          >
            {to}
          </Button>
          <InnerSheet
            value={from}
            setValue={setFrom}
            open={fromSheetOpen}
            onOpenChange={setFromSheetOpen}
          />
          <InnerSheet
            value={to}
            setValue={setTo}
            open={toSheetOpen}
            onOpenChange={setToSheetOpen}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
};
