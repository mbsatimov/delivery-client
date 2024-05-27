import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '../tamagui.config';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={'light'}>
        <ThemeProvider value={DefaultTheme}>{children}</ThemeProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
};
