import React from 'react';
import List from '@material-ui/core/List';
import { SortableContainer } from 'react-sortable-hoc';

import TodoItem from './TodoItem';

const TodoContainer = SortableContainer(({ todos }) => {
  const items = todos.map((item, index) => {
    const due = item.due_at
      ? (date => `${date.getMonth() + 1}/${date.getDate()}`)(
          new Date(item.due_at)
        )
      : 0;
    return (
      <TodoItem
        key={item.id}
        index={index}
        text={item.title}
        pinned={item.pinned}
        completed={item.completed}
        due={due}
        attachment={item.attachment}
        comment={item.comment}
      />
    );
  });
  return <List>{items}</List>;
});

export default TodoContainer;
