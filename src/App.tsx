import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Transactions from './modules/Transactions';

const App = () => {
  return (
    <Provider store={store}>
      <Transactions />
    </Provider>
  );
};

export default App;
