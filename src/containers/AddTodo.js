import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <TextField
          style={{
            margin: '10px auto',
            border: '2px solid #c8c8c8',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}
          placeholder="Add Task"
          fullWidth
          inputRef={node => (input = node)}
        />
      </form>
    </div>
  );
};

export default connect()(AddTodo);
