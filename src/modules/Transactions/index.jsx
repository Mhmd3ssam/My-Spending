import React from 'react';

import {transactionsSelector, incrementCount} from './state';

import {View, Text, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

function Transactions() {
  const dispatch = useDispatch();
  const {count} = useSelector(transactionsSelector);

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>Mhmd Essam count is : {count} </Text>
        <Button title="click" onPress={() => dispatch(incrementCount())} />
      </View>
    </View>
  );
}

export default Transactions;
