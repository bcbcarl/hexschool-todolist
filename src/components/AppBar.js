import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#4a90e2'
  }
});

const AppBar = ({ classes, children }) => (
  <MuiAppBar className={classes.appBar} position="sticky">
    {children}
  </MuiAppBar>
);

export default withStyles(styles)(AppBar);
