import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import {View} from 'react-native';
import {StackNavigation} from './Routes';
import {store} from './Store';

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <View style={styles.container}>
        <Provider store={store}>
          <StackNavigation />
        </Provider>
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
