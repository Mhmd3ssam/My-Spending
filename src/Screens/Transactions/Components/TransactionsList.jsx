import React from 'react';

import {FlatList} from 'react-native';
import TransactionRecord from './TransactionRecord';

import {useSelector} from 'react-redux';
import {transactionsSelector} from '../../../Store/transactionsSlice';

function TransactionsList() {
  const {transactionsList} = useSelector(transactionsSelector);
  const recordsArray = Object.keys(transactionsList).map(date => ({
    date,
    record: transactionsList[date],
  }));

  return (
    <FlatList
      data={recordsArray}
      keyExtractor={item => item.date}
      renderItem={({item}) => <TransactionRecord record={item.record} />}
    />
  );
}

export default TransactionsList;
