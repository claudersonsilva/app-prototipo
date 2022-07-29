import React from 'react'

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation/navigation';

import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar style='light' translucent backgroundColor='black' />
      <Navigation />
    </ThemeProvider>
  );
};