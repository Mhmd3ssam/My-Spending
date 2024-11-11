import React from 'react';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  addTransactions,
  transactionsSelector,
} from '../../Store/transactionsSlice';

import {StyleSheet, View, ScrollView} from 'react-native';
import {Layout, Button} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TextInput} from '../../Shared/TextInput';
import {DateInput} from '../../Shared/DateInput';
import {TimeInput} from '../../Shared/TimeInput';
import {NumberInput} from '../../Shared/NumberInput';
import {SelectInput} from '../../Shared/SelectInput';

import {formatDate, formats} from '../../Helpers/helpers';
import {categories, transaction_type} from '../../Helpers/constant';

import {Routes} from '../../Helpers/routs';

function AddTransaction() {
  const {transactionsList} = useSelector(transactionsSelector);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      category: null,
      description: null,
      amount: null,
      created_at: null,
      time: null,
      transaction_type: null,
    },
    validationSchema: Yup.object().shape({
      category: Yup.string().required('Please select category'),
      description: Yup.string(),
      amount: Yup.number().required('Please enter the amount'),
      created_at: Yup.date().required('Please select date'),
      time: Yup.date().required('Please select time'),
      transaction_type: Yup.string().required('Please select type'),
    }),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={styles.content}>
          <View style={styles.input}>
            <NumberInput
              label="Amount"
              required
              placeholder="Eenter Amount"
              value={formik.values.amount}
              onChange={amount => formik.setFieldValue('amount', amount)}
              min={0}
              max={10000}
              error={formik.touched.category && !!formik.errors.category}
              helperText={formik.touched.category && formik.errors.category}
            />
          </View>
          <View style={styles.input}>
            <SelectInput
              label="Category"
              required
              placeholder="Select Category"
              options={categories}
              value={formik.values.category}
              onChange={category => formik.setFieldValue('category', category)}
              error={formik.touched.category && !!formik.errors.category}
              helperText={formik.touched.category && formik.errors.category}
            />
          </View>
          <View style={styles.input}>
            <SelectInput
              label="Transaction Type"
              required
              placeholder="Select Type"
              options={transaction_type}
              value={formik.values.transaction_type}
              onChange={transactionType =>
                formik.setFieldValue('transaction_type', transactionType)
              }
              error={
                formik.touched.transaction_type &&
                !!formik.errors.transaction_type
              }
              helperText={
                !!formik.touched.transaction_type &&
                formik.errors.transaction_type
              }
            />
          </View>
          <View style={styles.input}>
            <TextInput
              label="Description"
              placeholder="Write a description"
              value={formik.values.description}
              onChange={description =>
                formik.setFieldValue('description', description)
              }
            />
          </View>
          <View style={styles.input}>
            <DateInput
              label="Date"
              required
              value={formik.values.created_at}
              onChange={date => formik.setFieldValue('created_at', date)}
              min={new Date(1900, 0, 1)}
              error={formik.touched.created_at && !!formik.errors.created_at}
              helperText={formik.touched.created_at && formik.errors.created_at}
            />
          </View>
          <View style={styles.input}>
            <TimeInput
              label="Time"
              required
              placeholder="Enter time (HH:MM)"
              value={formik.values.time}
              onChange={time => {
                formik.setFieldValue('time', time);
              }}
              error={formik.touched.time && !!formik.errors.time}
              helperText={formik.touched.time && formik.errors.time}
              is24Hour={true}
            />
          </View>
          <Button
            style={styles.button}
            status="info"
            appearance="outline"
            onPress={() => {
              let record = {
                created_at: formatDate(
                  formik.values.created_at,
                  formats.dateShort,
                ),
                totla_transaction: null,
                transaction: {
                  category: formik.values.category,
                  description: formik.values.description,
                  amount: formik.values.amount,
                  time: formik.values.time,
                  transaction_type: formik.values.transaction_type,
                },
              };
              dispatch(addTransactions(record));
              navigation.navigate(Routes.Transactions);
            }}>
            Save
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f7',
  },
  content: {
    flex: 1,
    backgroundColor: '#f2f3f7',
    padding: 20,
    width: '100%',
    gap: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    marginBottom: 80,
  },
});

export default AddTransaction;
