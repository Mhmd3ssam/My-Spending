/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Select, SelectItem, Text} from '@ui-kitten/components';
import PropTypes from 'prop-types';

export const SelectInput = ({
  label,
  required = false,
  placeholder = '',
  disabled = false,
  size = 'medium',
  value = '',
  onChange,
  onBlur,
  onFocus,
  error = '',
  helperText = '',
  options = [],
  placement = 'bottom',
  style,
}) => {
  const renderOption = useMemo(
    () =>
      options.map(option => (
        <SelectItem key={option.id} title={option.label} value={option.value} />
      )),
    [options],
  );

  const selectedOption = useMemo(() => {
    return options.find(option => option.value === value);
  }, [value, options]);

  return (
    <View style={[{marginBottom: 16}, style]}>
      {label && (
        <Text
          style={{
            marginBottom: 4,
            fontWeight: '500',
            fontSize: 14,
          }}
          status={error ? 'danger' : 'basic'}>
          {label} {required && <Text status="danger">*</Text>}
        </Text>
      )}
      <Select
        value={selectedOption?.label}
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onSelect={index => {
          const selected = options[index.row];
          if (selected) {
            onChange?.(selected.value);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        status={error ? 'danger' : 'basic'}
        caption={error || helperText}
        placement={placement}>
        {renderOption}
      </Select>
    </View>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  style: PropTypes.object,
};
