import React from 'react';
import List from '@material-ui/core/List';
import { SortableContainer } from 'react-sortable-hoc';

import TodoItem from './TodoItem';

const TodoContainer = SortableContainer(({ todos }) => {
  const items = Object.keys(todos).map((key, index) => {
    const {
      due_at: dueAt,
      title,
      pinned,
      completed,
      attachment,
      comment
    } = todos[key];
    const due = dueAt
      ? (date => `${date.getMonth() + 1}/${date.getDate()}`)(new Date(dueAt))
      : 0;
    return (
      <TodoItem
        key={key}
        index={index}
        text={title}
        pinned={pinned}
        completed={completed}
        due={due}
        attachment={attachment}
        comment={comment}
      />
    );
  });
  return <List>{items}</List>;
});

export default TodoContainer;
