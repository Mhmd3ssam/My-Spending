/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Debts from '../Screens/Debts';
import {TransactionsStack} from './TransactionsStack';

import {styles} from './styles';
import {Routes} from '../Helpers/routs';

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

export function TapNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarButton: props => <TabBarButton {...props} />,
        headerBackground: () => <View style={styles.headerBackground} />,
      }}>
      <Tab.Screen
        name={Routes.TransactionsStack}
        component={TransactionsStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
              Home
            </Text>
          ),
          headerShown: false,
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
