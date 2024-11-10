/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Debts from '../Screens/Debts';
import Transactions from '../Screens/Transactions';

import {Routes} from './routs';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarButton = ({children, accessibilityState, onPress}) => {
  const isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, isSelected && styles.tabButtonActive]}>
      {children}
    </TouchableOpacity>
  );
};

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

function TapNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        headerStyle: styles.header,
        tabBarButton: props => <TabBarButton {...props} />,
        tabBarLabelStyle: styles.tabBarLabel,
        headerBackground: () => <View style={styles.headerBackground} />,
      }}>
      <Tab.Screen
        name={Routes.Transactions}
        component={Transactions}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
              Home
            </Text>
          ),
          headerTitle: () => (
            <Text style={styles.headerTitleText}>Transactions</Text>
          ),
          tabBarIcon: () => <Icon />,
        }}
      />
      <Tab.Screen
        name={Routes.Debts}
        component={Debts}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
              Debts
            </Text>
          ),
          headerTitle: () => <Text style={styles.headerTitleText}>Debts</Text>,
          tabBarIcon: () => <Icon />,
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigation() {
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

export default StackNavigation;
