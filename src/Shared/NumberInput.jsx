import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import {Input, Text} from '@ui-kitten/components';

import {styles} from './styles';

export const NumberInput = ({
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
  min,
  max,
}) => {
  const handleChangeText = text => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (min !== undefined && Number(numericValue) < min) return;
    if (max !== undefined && Number(numericValue) > max) return;

    onChange && onChange(numericValue);
  };

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
        keyboardType="numeric"
        onChangeText={handleChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        status={error ? 'danger' : 'basic'}
        caption={error || helperText}
      />
    </View>
  );
};

NumberInput.propTypes = {
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
  min: PropTypes.number,
  max: PropTypes.number,
};
