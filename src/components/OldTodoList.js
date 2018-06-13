import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import TodoContainer from './TodoContainer';

class OldTodoList extends React.Component {
  constructor(props) {
    super(props);

    const defaultTitle = 'Type Something Here...';

    this.state = {
      items: [
        {
          id: 1528578226000,
          created_at: 1528578226000,
          due_at: 1557763200000,
          title: defaultTitle,
          pinned: true,
          completed: false,
          attachment: true,
          comment: 'meet him at Lorence Cafe'
        },
        {
          id: 1528578231000,
          created_at: 1528578231000,
          due_at: 0,
          title: defaultTitle,
          pinned: true,
          completed: false,
          attachment: true,
          comment: 'meet her at Coffee Shop'
        },
        {
          id: 1528578236000,
          created_at: 1528578236000,
          due_at: 1560787200000,
          title: defaultTitle,
          pinned: false,
          completed: false,
          attachment: false,
          comment: ''
        },
        {
          id: 1528578241000,
          created_at: 1528578241000,
          due_at: 0,
          title: defaultTitle,
          pinned: false,
          completed: false,
          attachment: true,
          comment: ''
        },
        {
          id: 1528578246000,
          created_at: 1528578246000,
          due_at: 0,
          title: defaultTitle,
          pinned: false,
          completed: true,
          attachment: false,
          comment: ''
        }
      ]
    };
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  }

  render() {
    return (
      <TodoContainer items={this.state.items} onSortEnd={this.onSortEnd} />
    );
  }
}

export default OldTodoList;
