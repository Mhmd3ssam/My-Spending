import React from 'react';

import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

function AddDebts() {
  return (
    <View style={styles.container}>
      <Text>AddDebts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddDebts;
