/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactionsList: {},
    totalExpenses: 0,
    totalEarnings: 0,
    netTotal: 0,
    categorySpending: [],
  },
  reducers: {
    addTransactions: (state, {payload}) => {
      const {created_at, transaction} = payload;
      if (state.transactionsList[created_at]) {
        state.transactionsList[created_at].transaction.push(transaction);
      } else {
        state.transactionsList[created_at] = {
          created_at,
          totla_transaction: null,
          transaction: [transaction],
        };
      }

      //Total transaction for the given date
      state.transactionsList[created_at].totla_transaction =
        state.transactionsList[created_at].transaction.reduce((total, txn) => {
          const amount = Number(txn.amount) || 0;
          const transactionType = txn.transaction_type;
          if (transactionType === 'spending') {
            return total + amount;
          } else if (transactionType === 'earning') {
            return total - amount;
          }

          return total;
        }, 0);

      //Total expenses based on all transactions
      state.totalExpenses = Object.values(state.transactionsList).reduce(
        (total, {transaction}) => {
          const totalSpending = transaction.reduce((spending, txn) => {
            const amount = Number(txn.amount) || 0;
            if (txn.transaction_type === 'spending') {
              return spending + amount;
            }
            return spending;
          }, 0);
          return total + totalSpending;
        },
        0,
      );

      //Total earnings based on all transactions
      state.totalEarnings = Object.values(state.transactionsList).reduce(
        (total, {transaction}) => {
          const totalEarning = transaction.reduce((earning, txn) => {
            const amount = Number(txn.amount) || 0;
            if (txn.transaction_type === 'earning') {
              return earning + amount;
            }
            return earning;
          }, 0);
          return total + totalEarning;
        },
        0,
      );

      //Net total based on all transactions
      state.netTotal = state.totalExpenses - state.totalEarnings;

      //category spending
      const categorySpending = {};
      Object.values(state.transactionsList).forEach(({transaction}) => {
        transaction.forEach(txn => {
          if (txn.transaction_type === 'spending') {
            const category = txn.category;
            const amount = Number(txn.amount) || 0;

            if (categorySpending[category]) {
              categorySpending[category] += amount;
            } else {
              categorySpending[category] = amount;
            }
          }
        });
      });
      state.categorySpending = Object.keys(categorySpending).map(category => ({
        category,
        value: categorySpending[category],
      }));
    },
  },
});
export const {addTransactions} = transactionsSlice.actions;
export const transactionsSelector = state => state.transactions;
