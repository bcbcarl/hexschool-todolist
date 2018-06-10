import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    fontSize: 60,
    '&$checked': {
      color: '#4a90e2'
    }
  },
  checked: {}
});

const Icon = () => (
  <div
    style={{
      width: '1.1rem',
      height: '1.1rem',
      borderRadius: '2px',
      background: 'white'
    }}
  />
);

class Checkbox extends MuiCheckbox {}

Checkbox.defaultProps = {
  disableRipple: true,
  icon: <Icon />
};

export default withStyles(styles)(Checkbox);
