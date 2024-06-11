import { ArrowRight } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { View } from 'tamagui';

import { Button, Drawer, DrawerFrame, DrawerHandle } from '@/components/UI';
import { useDirectionStore } from '@/utils/store';

import { DirectionSelect } from './DirectionSelect';
import { NewPostDrawer } from './NewPostDrawer';

export const DirectionDrawer = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { receiverPlace, senderPlace } = useDirectionStore();

  const directionCompleted = !!receiverPlace.address && !!senderPlace.address;

  return (
    <Drawer
      open={true}
      snapPoints={[35]}
      disableDrag
      dismissOnOverlayPress={false}
    >
      <DrawerFrame
        paddingBlock="$2"
        justifyContent="space-between"
        paddingInline="$4"
      >
        <View>
          <DrawerHandle />
          <DirectionSelect />
        </View>
        {directionCompleted && (
          <Button
            variant="secondary"
            onPress={() => setOpenDetails(true)}
            marginBlock="$4"
          >
            Create new post
            <ArrowRight />
          </Button>
        )}
        <NewPostDrawer open={openDetails} setOpen={setOpenDetails} />
      </DrawerFrame>
    </Drawer>
  );
};
