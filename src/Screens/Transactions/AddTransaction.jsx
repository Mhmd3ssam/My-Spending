import React from 'react';

import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function AddTransaction() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Add Transactions Screen </Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default AddTransaction;
