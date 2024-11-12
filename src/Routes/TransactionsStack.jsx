/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';

import {useSelector} from 'react-redux';
import {transactionsSelector} from '../Store/transactionsSlice';

import {createStackNavigator} from '@react-navigation/stack';

import Transactions from '../Screens/Transactions';
import AddTransaction from '../Screens/Transactions/AddTransaction';
import {IconNavigationButton} from '../Shared/IconNavigationButton';

import {styles} from './styles';
import {Routes} from '../Helpers/routs';

import {Icon} from '@ui-kitten/components';

export function TransactionsStack() {
  const Stack = createStackNavigator();
  const {transactionsList} = useSelector(transactionsSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <View style={styles.headerBackground} />,
      }}>
      <Stack.Screen
        name={Routes.Transactions}
        component={Transactions}
        options={({navigation}) => ({
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>Transactions</Text>
              {Object.keys(transactionsList).length !== 0 && (
                <IconNavigationButton
                  iconName="plus-outline"
                  onPress={() => navigation.navigate(Routes.AddTransaction)}
                  status="basic"
                  size="small"
                />
              )}
            </View>
          ),
        })}
      />
      <Stack.Screen
        name={Routes.AddTransaction}
        component={AddTransaction}
        options={{
          headerTitle: 'Add Transaction',
          headerStyle: {
            backgroundColor: '#f2f3f7',
          },
          headerTintColor: '#000',
          headerBackImage: () => <Icon name="arrow-ios-back-outline" />,
        }}
      />
    </Stack.Navigator>
  );
}
