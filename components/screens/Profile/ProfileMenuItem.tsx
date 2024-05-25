import React, { FC } from 'react';
import { ListItem, ListItemProps } from 'tamagui';

type ProfileMenuItemProps = ListItemProps;

export const ProfileMenuItem: FC<ProfileMenuItemProps> = ({ ...props }) => {
  return <ListItem {...props} hoverTheme scaleIcon={1.5} />;
};
