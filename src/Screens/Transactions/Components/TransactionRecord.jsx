/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {StyleSheet, Image, FlatList, View} from 'react-native';
import {transaction_type} from '../../../Helpers/constant';
import {getCategoryIcon, convertDate} from '../../../Helpers/helpers';

function TransactionRecord({record}) {
  const renderItem = ({item}) => (
    <Layout style={styles.detailsContainer}>
      <View style={styles.categoryContainer}>
        <View style={styles.iconWrapper}>
          <Image
            source={getCategoryIcon(item.category)}
            style={styles.categoryIcon}
          />
        </View>
        <View>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color:
              item.transaction_type === transaction_type[0].value
                ? '#0db90d'
                : '#d95c63',
            fontWeight: 'bold',
          }}>
          {item.transaction_type === transaction_type[0].value
            ? `+ ${item.amount} $`
            : `- ${item.amount} $`}
        </Text>
      </View>
    </Layout>
  );
  return (
    <View style={styles.conainer}>
      <View style={styles.summeryContainer}>
        <Text style={styles.summeryContent}>
          {convertDate(record?.created_at)}
        </Text>
        <Text
          style={
            styles.summeryContent
          }>{`${record?.totla_transaction} $`}</Text>
      </View>
      <View>
        <FlatList
          data={record.transaction}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    gap: 1,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  summeryContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  summeryContent: {
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#232B5D',
    fontSize: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    elevation: 1,
    borderRadius: 10,
    marginVertical: 5,
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
  description: {
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
