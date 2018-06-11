import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

const RestoreTodos = ({ dispatch }) => (
  <button onClick={() => dispatch(fetchTodos())}>Restore Todos</button>
);

export default connect()(RestoreTodos);
