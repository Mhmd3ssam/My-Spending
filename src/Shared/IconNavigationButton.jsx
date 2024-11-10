import React from 'react';
import {Button, Icon} from '@ui-kitten/components';
import PropTypes from 'prop-types';

export const IconNavigationButton = ({
  disabled = false,
  size = 'medium',
  onPress,
  iconName,
  status = 'primary',
}) => {
  const renderIcon = props => <Icon {...props} name={iconName} />;

  return (
    <Button
      accessoryLeft={renderIcon}
      disabled={disabled}
      size={size}
      status={status}
      onPress={onPress}
    />
  );
};

IconNavigationButton.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'basic',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
};
