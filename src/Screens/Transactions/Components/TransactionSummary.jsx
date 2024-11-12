import React from 'react';

import {useSelector} from 'react-redux';
import {transactionsSelector} from '../../../Store/transactionsSlice';

import {View, StyleSheet, Text} from 'react-native';
import {PerformancePieChart} from '../../../Shared/PerformancePieChart';

import {
  assignCategoryColors,
  calculateMaxCategoryRatio,
} from '../../../Helpers/helpers';
import {catagoryColorPalette} from '../../../Helpers/constant';

function TransactionSummary() {
  const {totalExpenses, categorySpending} = useSelector(transactionsSelector);

  const existingColors = catagoryColorPalette.map(item => item.color);
  const categoriesWithColors = assignCategoryColors(
    categorySpending,
    catagoryColorPalette,
    existingColors,
  );

  const maxCategoryRatio = calculateMaxCategoryRatio(
    categorySpending,
    totalExpenses,
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.myTilte}>
          My <Text style={styles.expensesTitle}>Expenses </Text>
        </Text>
        <Text style={styles.expensesValue}>${totalExpenses}</Text>
      </View>
      <View>
        <PerformancePieChart
          pieData={categoriesWithColors}
          centerLabel={{value: maxCategoryRatio?.ratio}}
          legendData={[]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    //android
    elevation: 1,
    //ios
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  expensesTitle: {
    fontWeight: 'bold',
    color: '#232B5D',
    fontSize: 15,
  },
  myTilte: {
    color: '#232B5D',
    fontSize: 15,
  },
  expensesValue: {
    fontWeight: 'bold',
    color: '#232B5D',
    fontSize: 35,
    fontStyle: 'normal',
  },
});
export default TransactionSummary;
