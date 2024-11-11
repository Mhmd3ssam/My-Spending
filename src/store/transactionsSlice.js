import {createSlice} from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactionsList: {},
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
    },
  },
});
export const {addTransactions} = transactionsSlice.actions;
export const transactionsSelector = state => state.transactions;
