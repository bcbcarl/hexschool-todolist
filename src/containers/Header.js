import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AppBar from '../components/AppBar';

const styles = theme => ({
  root: {},
  appBar: {
    backgroundColor: '#4a90e2'
  },
  tabsIndicator: {
    backgroundColor: '#00408b',
    height: theme.typography.pxToRem(5)
  },
  tabRoot: {
    opacity: 1,
    color: '#00408B',
    textTransform: 'none',
    marginTop: theme.typography.pxToRem(14),
    marginBottom: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular
  },
  tabSelected: {
    color: 'white',
    fontWeight: theme.typography.fontWeightMedium
  },
  tabLabel: {
    fontSize: theme.typography.pxToRem(24)
  }
});

const Header = ({ classes }) => {
  const tabClasses = {
    root: classes.tabRoot,
    selected: classes.tabSelected,
    label: classes.tabLabel
  };

  return (
    <AppBar>
      <nav>
        <Tabs
          centered
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator
          }}
          value={0}
        >
          <Tab disableRipple classes={tabClasses} label="My Tasks" />
          <Tab disableRipple classes={tabClasses} label="In Progress" />
          <Tab disableRipple classes={tabClasses} label="Completed" />
        </Tabs>
      </nav>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
