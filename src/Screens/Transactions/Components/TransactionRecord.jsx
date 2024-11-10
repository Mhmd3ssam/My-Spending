/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {getCategoryIcon} from '../../../Helpers/helpers';
import {transaction_type} from '../../../Helpers/constant';

function TransactionRecord({record}) {
  const renderItem = ({item}) => (
    <View style={styles.detailsContainer}>
      <View style={styles.categoryContainer}>
        <View style={styles.iconWrapper}>
          <Image
            source={getCategoryIcon(item.category)}
            style={styles.categoryIcon}
          />
        </View>
        <View>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.note}>{item.note}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color:
              item.transaction_type === transaction_type.earning
                ? '#0db90d'
                : '#d95c63',
            fontWeight: 'bold',
          }}>
          {item.transaction_type === transaction_type.earning
            ? `+ ${item.price} $`
            : `- ${item.price} $`}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={styles.conainer}>
      <View style={styles.summeryContainer}>
        <Text style={styles.summeryContent}>{record.created_at}</Text>
        <Text style={styles.summeryContent}>{record.totla_transaction}</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={record.transaction}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    gap: 4,
    margin: 20,
  },
  summeryContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summeryContent: {
    color: '#707070',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fffffd',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f2f3f7',
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  category: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'capitalize',
  },
  note: {
    color: '#707070',
    fontSize: 10,
  },
  time: {
    color: '#707070',
    fontSize: 9,
  },
  earningPrice: {
    color: '#0db90d',
  },
  spendingPrice: {
    color: '#d95c63',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginStart: 60,
  },
});
export default TransactionRecord;
