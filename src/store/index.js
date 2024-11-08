import {configureStore} from '@reduxjs/toolkit';
import {transactionsSlice} from '../modules/Transactions/state';

const slices = [transactionsSlice];
export const store = configureStore({
  reducer: {
    ...slices.reduce(
      (acc, slice) => ({...acc, [slice.name]: slice.reducer}),
      {},
    ),
  },
});
