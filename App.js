import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/navigation';
import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          // Any string can be used as the fontFamily name. Here we use an object to provide more control
          'Montserrat-Bold': {
            uri: require('./src/assets/fonts/Montserrat-Bold.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'Montserrat-Medium': {
            uri: require('./src/assets/fonts/Montserrat-Medium.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
          'Montserrat-Regular': {
            uri: require('./src/assets/fonts/Montserrat-Regular.ttf'),
            display: Font.FontDisplay.FALLBACK,
          }
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar style='light' translucent backgroundColor='black' />
      <Navigation />
      <View onLayout={onLayoutRootView}></View>
    </ThemeProvider>
  );
}

