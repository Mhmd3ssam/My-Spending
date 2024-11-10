import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Transactions() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Transactions Screen </Text>
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
export default Transactions;
