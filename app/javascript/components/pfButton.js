import React from 'react';
import { Button } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: '2%'
  }
};
const PfButton = ({ buttonText, isSmall, variant, onBtnClick, ...props }) => {
  return (
    <Button
      variant={variant}
      style={styles.button}
      isSmall={isSmall}
      onClick={onBtnClick}
      {...props}>
      {buttonText}
    </Button>
  );
};
PfButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  variant: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func
};
export default PfButton;
