import React from 'react';
import Typography from '@material-ui/core/Typography';

import AddTask from './AddTask';
import TodoList from './TodoList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TabContainer = ({ children }) => (
  <Typography
    style={{
      margin: 'auto',
      width: '620px'
    }}
    component="main"
  >
    {children}
  </Typography>
);

const FakeTaskLeft = () => (
  <p
    style={{
      paddingLeft: '48px',
      fontFamily: 'Roboto',
      fontStyle: 'italic',
      fontSize: '24px',
      color: '#c8c8c8'
    }}
  >
    4 tasks left
  </p>
);

const TodoPanel = () => (
  <TabContainer>
    {/* <AddTodo /> */}
    <AddTask />
    <VisibleTodoList />
    {/* <TaskList /> */}
    <FakeTaskLeft />
  </TabContainer>
);

export default TodoPanel;
