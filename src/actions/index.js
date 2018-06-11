import { createActions } from 'redux-actions';

const { increment, decrement, incrementAsync } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
  INCREMENT_ASYNC: (amount = 1) => ({ amount })
});

const { fetchUser, fetchUserFulfilled } = createActions({
  FETCH_USER: username => ({ username }),
  FETCH_USER_FULFILLED: payload => payload
});

const { fetchTodos, fetchTodosFulfilled } = createActions({
  FETCH_TODOS: payload => payload,
  FETCH_TODOS_FULFILLED: payload => payload
});

export const addTodo = text => {
  const currentTime = new Date().getTime();
  return {
    type: 'ADD_TODO',
    id: currentTime,
    created_at: currentTime,
    text
  };
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export {
  increment,
  decrement,
  incrementAsync,
  fetchUser,
  fetchUserFulfilled,
  fetchTodos,
  fetchTodosFulfilled
};
