import { config } from '@tamagui/config/v3';
import { TamaguiInternalConfig, createTamagui } from 'tamagui';

export const tamaguiConfig: TamaguiInternalConfig = createTamagui(config);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig {}
}
