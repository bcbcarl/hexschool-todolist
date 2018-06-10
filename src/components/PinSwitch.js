import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import StarIcon from './icons/Star';

const styles = () => ({
  root: {
    '&$checked': {
      color: '#f5a623'
    }
  },
  checked: {}
});

class PinSwitch extends Checkbox {}

PinSwitch.defaultProps = {
  checkedIcon: <StarIcon />,
  disableRipple: true,
  icon: <StarIcon type="outline" />
};

export default withStyles(styles)(PinSwitch);
