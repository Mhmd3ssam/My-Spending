import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Routes} from '../../../Helpers/routs';
import {icons} from '../../../Helpers/helpers';
import {Button} from '@ui-kitten/components';

function EmptyTransactions() {
  const navigation = useNavigation();

  return (
    <View style={styles.conainer}>
      <Image source={icons.emptymoney} style={styles.icon} />
      <Text style={styles.content}>Empty wallet, Or just no records..</Text>
      <Button
        appearance="ghost"
        size="small"
        onPress={() => navigation.navigate(Routes.AddTransaction)}>
        Start tracking !
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 150,
    height: 150,
  },
  content: {
    textAlign: 'center',
    fontSize: 12,
    color: '#232B5D',
  },
  trackingColor: {
    color: '#464BD8',
    fontWeight: 'bold',
  },
});

export default EmptyTransactions;
