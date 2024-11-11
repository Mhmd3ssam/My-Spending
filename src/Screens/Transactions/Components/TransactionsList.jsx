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

  console.log('transactionsList', transactionsList);

  return (
    <FlatList
      data={recordsArray}
      keyExtractor={item => item.date}
      renderItem={({item}) => <TransactionRecord record={item.record} />}
    />
  );
}

export default TransactionsList;

const data = {
  created_at: 'Tue, 22 Oct 2024',
  totla_transaction: 1092,
  transaction: [
    {
      category: 'salary',
      description: 'دوا ماما',
      amount: '123',
      time: '12:02',
      transaction_type: 'earning',
    },
    {
      category: 'cinema',
      description: 'description',
      amount: '123',
      time: '12:02',
      transaction_type: 'spending',
    },
    {
      category: 'transfer',
      description: 'description',
      amount: '123',
      time: '12:02',
      transaction_type: 'spending',
    },
    {
      category: 'medicine',
      description: 'description',
      amount: '123',
      time: '12:02',
      transaction_type: 'earning',
    },
    {
      category: 'food',
      description: 'description',
      amount: '123',
      time: '12:02',
      transaction_type: 'earning',
    },
  ],
};

const recordeList = {
  'Tue, 22 Oct 2024': {
    created_at: 'Tue, 22 Oct 2024',
    totla_transaction: 1092,
    transaction: [
      {
        category: 'salary',
        description: 'دوا ماما',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'cinema',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'transfer',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'medicine',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'food',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
    ],
  },
  'Man 23 Oct 2024': {
    created_at: 'Tue, 22 Oct 2024',
    totla_transaction: 1092,
    transaction: [
      {
        category: 'salary',
        description: 'دوا ماما',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'cinema',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'transfer',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'spending',
      },
      {
        category: 'medicine',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
      {
        category: 'food',
        description: 'description',
        amount: '123',
        time: '12:02',
        transaction_type: 'earning',
      },
    ],
  },
};
