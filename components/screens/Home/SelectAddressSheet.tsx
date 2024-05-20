import { ChevronDown } from '@tamagui/lucide-icons';
import type { SheetProps } from '@tamagui/sheet';
import { Sheet } from '@tamagui/sheet';
import { Button, Input, YStack } from 'tamagui';

type InnerSheetProps = SheetProps & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InnerSheet = ({ value, setValue, ...props }: InnerSheetProps) => {
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
