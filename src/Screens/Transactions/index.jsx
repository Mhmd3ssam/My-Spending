import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';
import {transactionsSelector} from '../../Store/transactionsSlice';

import TransactionsList from './Components/TransactionsList';
import EmptyTransactions from './Components/EmptyTransactions';
import TransactionSummary from './Components/TransactionSummary';
function Transactions() {
  const {transactionsList} = useSelector(transactionsSelector);
  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(transactionsList).length === 0 ? (
        <EmptyTransactions />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[]}
          ListHeaderComponent={
            <View style={styles.content}>
              <TransactionSummary />
              <TransactionsList />
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f7',
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
export default Transactions;
