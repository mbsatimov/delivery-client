import { ChevronRight, Home } from '@tamagui/lucide-icons';
import React from 'react';
import { Separator, YGroup, YStack } from 'tamagui';
import { ProfileMenuItem } from './ProfileMenuItem';

export const ProfileMenu = () => {
  return (
    <YStack>
      <YGroup alignSelf="center" size="$4" separator={<Separator />}>
        <YGroup.Item>
          <ProfileMenuItem
            hoverTheme
            icon={Home}
            iconAfter={ChevronRight}
            title="Addresses"
            subTitle="8 5a chilonzor st."
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};
