import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTodo } from '../actions';

const Input = styled.input`
  &::placeholder {
    color: #c8c8c8;
  }
`;

const AddTodo = ({ dispatch }) => {
  let input;

  return (
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
      <Input
        style={{
          boxSizing: 'border-box',
          fontFamily: 'Roboto',
          fontSize: '24px',
          margin: '1rem auto',
          padding: '1rem 2rem',
          width: '100%',
          border: '2px solid #c8c8c8',
          borderRadius: '5px',
          backgroundColor: 'white'
        }}
        placeholder="Add Task"
        innerRef={node => {
          input = node;
        }}
      />
    </form>
  );
};

export default connect()(AddTodo);
