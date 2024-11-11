import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';
import {Datepicker, Text} from '@ui-kitten/components';

import {styles} from './styles';

export const DateInput = ({
  name,
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
  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text status="danger">*</Text>}
        </Text>
      )}
      <Datepicker
        date={value}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onSelect={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        status={error ? 'danger' : 'basic'}
        caption={error || helperText}
        min={min}
        max={max}
      />
    </View>
  );
};

DateInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
};
