import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Icon, Input, Text} from '@ui-kitten/components';

export const TimeInput = ({
  label,
  required = false,
  placeholder = 'Select time',
  disabled = false,
  size = 'medium',
  value = '',
  onChange,
  onBlur,
  onFocus,
  error,
  helperText,
  is24Hour = true,
}) => {
  const formatTimeInput = text => {
    const numbers = text.replace(/[^\d]/g, '');
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 4) {
      const hours = numbers.substring(0, 2);
      const minutes = numbers.substring(2);
      return `${hours}:${minutes}`;
    }

    return value;
  };

  const validateTime = timeString => {
    const [hours, minutes] = timeString.split(':').map(Number);

    if (is24Hour) {
      return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
    }
    return hours > 0 && hours <= 12 && minutes >= 0 && minutes < 60;
  };

  const handleChangeText = text => {
    const formattedTime = formatTimeInput(text);

    if (formattedTime.includes(':') && !validateTime(formattedTime)) {
      return;
    }

    onChange?.(formattedTime);
  };

  const renderClockIcon = props => (
    <TouchableWithoutFeedback onPress={() => onFocus?.()}>
      <Icon {...props} name="clock-outline" />
    </TouchableWithoutFeedback>
  );

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
        accessoryRight={renderClockIcon}
        maxLength={5}
      />
    </View>
  );
};

TimeInput.propTypes = {
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
  is24Hour: PropTypes.bool,
  style: PropTypes.object,
};
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
});
