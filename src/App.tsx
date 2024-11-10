import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import StackNavigation from './Routes/Navigation';
import { store } from './Store';

function App() {

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </View>
  );
}

export default App;