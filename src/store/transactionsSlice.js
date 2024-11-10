import {createSlice} from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: state => {
      state.count += 1;
    },
  },
});
export const {incrementCount} = transactionsSlice.actions;
export const transactionsSelector = state => state.transactions;
