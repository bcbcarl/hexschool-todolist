import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import EditIcon from './icons/Edit';

const styles = () => ({
  root: {
    '&$checked': {
      color: '#4a90e2'
    }
  },
  checked: {}
});

class EditSwitch extends Checkbox {}

EditSwitch.defaultProps = {
  checkedIcon: <EditIcon />,
  disableRipple: true,
  icon: <EditIcon type="outline" />
};

export default withStyles(styles)(EditSwitch);
