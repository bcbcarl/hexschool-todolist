import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';

import CalendarIcon from './icons/Calendar';
import FileIcon from './icons/File';
import CommentIcon from './icons/Comment';

import Checkbox from './Checkbox';
import PinSwitch from './PinSwitch';
import EditSwitch from './EditSwitch';
import { toggleTodo } from '../actions';

const styles = theme => ({
  primary: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  },
  primary2: {
    textDecoration: 'line-through',
    color: '#9b9b9b',
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  },
  secondary: {
    fontSize: theme.typography.pxToRem(16)
  }
});

const ListItemStatus = ({ due, attachment, comment }) => (
  <span>
    {due ? (
      <span style={{ marginRight: '1rem' }}>
        <CalendarIcon type="outline" size="lg" />
        <span
          style={{
            marginLeft: '0.5rem',
            verticalAlign: '-1px',
            fontSize: '16px'
          }}
        >
          {due}
        </span>
      </span>
    ) : null}
    {attachment ? (
      <span style={{ marginRight: '1rem' }}>
        <FileIcon type="outline" size="lg" />
      </span>
    ) : null}
    {comment ? (
      <span style={{ marginRight: '1rem' }}>
        <CommentIcon type="outline" size="lg" />
      </span>
    ) : null}
  </span>
);

const SecondaryAction = ({ pinned }) => (
  <React.Fragment>
    <PinSwitch checked={pinned} />
    <EditSwitch />
  </React.Fragment>
);

const BaseItem = ({
  dispatch,
  id,
  classes,
  text,
  pinned,
  completed,
  due,
  attachment,
  comment
}) => {
  const itemColor = pinned ? '#fff2dc' : '#f2f2f2';
  const primary = text;
  const secondary = !completed ? (
    <ListItemStatus
      due={due}
      attachment={attachment}
      comment={!!comment.length}
    />
  ) : null;

  return (
    <ListItem
      style={{
        backgroundColor: itemColor,
        borderRadius: '5px',
        margin: '0.5rem auto',
        height: '102px'
      }}
    >
      <Checkbox
        tabIndex={-1}
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <ListItemText
        classes={{ primary: !completed ? classes.primary : classes.primary2 }}
        primary={primary}
        secondary={secondary}
      />
      <SecondaryAction pinned={pinned} />
    </ListItem>
  );
};

const TodoItem = withStyles(styles)(BaseItem);

export default connect()(SortableElement(TodoItem));
