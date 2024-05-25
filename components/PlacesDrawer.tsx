import { ChevronDown } from '@tamagui/lucide-icons';
import type { SheetProps } from '@tamagui/sheet';
import { Sheet } from '@tamagui/sheet';
import { useEffect, useState } from 'react';
import { Button, Input, YStack } from 'tamagui';

import { useMapStore } from '@/utils/store';

type InnerSheetProps = SheetProps & {};

const PlacesDrawer = ({ ...props }: InnerSheetProps) => {
  const { region } = useMapStore();
  const [value, setValue] = useState<string>('');

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
    <Sheet
      animation="medium"
      modal
      snapPoints={[95]}
      dismissOnSnapToBottom
      {...props}
    >
      <Sheet.Overlay
        animation="medium"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle marginInline="40%" />
      <Sheet.Frame
        padding="$4"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Input
          value={value}
          onChange={e => setValue(e.nativeEvent.text)}
          height={50}
          width={'100%'}
        />
        <Sheet.ScrollView>
          <YStack padding="$5" gap="$8">
            <Button
              size="$6"
              circular
              alignSelf="center"
              icon={ChevronDown}
              onPress={() => props.onOpenChange?.(false)}
            />
          </YStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export { PlacesDrawer };
