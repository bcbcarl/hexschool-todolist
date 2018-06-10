import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { increment, decrement } from '../actions';

const rootReducer = handleActions(
  {
    INCRMENT_ASYNC: (state, action) => ({
      ...state,
      counter: state.counter + action.payload.amount
    }),
    FETCH_USER: (state, action) => ({
      ...state,
      username: action.payload.username
    }),
    FETCH_USER_FULFILLED: (state, action) => ({
      ...state,
      users: {
        [state.username]: {
          id: action.payload.id,
          type: action.payload.type,
          name: action.payload.name,
          location: action.payload.location
        }
      }
    }),
    [combineActions(increment, decrement)](
      state,
      {
        payload: { amount }
      }
    ) {
      return {
        ...state,
        counter: state.counter + amount
      };
    }
  },
  {
    counter: 0,
    username: ''
  }
);

export default combineReducers({ rootReducer, todos, visibilityFilter });
