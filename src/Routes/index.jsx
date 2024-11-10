import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {TapNavigation} from './TapNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Routes} from '../Helpers/routs';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: '#7B68EE',
    background: '#fff',
    card: '#000000',
    text: '#ffffff',
    border: 'transparent',
    notification: '#7B68EE',
  },
};

export function StackNavigation() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={Routes.Tabs} component={TapNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
