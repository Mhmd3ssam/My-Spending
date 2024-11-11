import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import {Input, Text} from '@ui-kitten/components';

import {styles} from './styles';

export const TextInput = ({
  label,
  required = false,
  placeholder,
  disabled = false,
  size = 'medium',
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  helperText,
  multiline = false,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text status="danger">*</Text>}
        </Text>
      )}
      <Input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        status={error ? 'danger' : 'basic'}
        caption={error || helperText}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};
