import React from 'react';

import {FlatList} from 'react-native';
import TransactionRecord from './TransactionRecord';

function TransactionsList() {
  const record = {
    created_at: 'Tue, 22 Oct 2024',
    totla_transaction: 1092,
    transaction: [
      {
        category: 'salary',
        note: 'دوا ماما',
        price: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'cinema',
        note: 'note',
        price: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'transfer',
        note: 'note',
        price: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'medicine',
        note: 'note',
        price: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'food',
        note: 'note',
        price: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
    ],
  };

  const recordeList = {
    'Tue, 22 Oct 2024': record,
    'Man 23 Oct 2024': record,
  };

  const recordsArray = Object.keys(recordeList).map(date => ({
    date,
    record: recordeList[date],
  }));
  console.log('recordsArray', recordsArray);
  return (
    <FlatList
      data={recordsArray}
      keyExtractor={item => item.date}
      renderItem={({item}) => <TransactionRecord record={item.record} />}
    />
  );
}

export default TransactionsList;
