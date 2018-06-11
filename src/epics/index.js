import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { increment, fetchTodosFulfilled, fetchUserFulfilled } from '../actions';

const fakeTodos = [
  {
    id: 1528578226000,
    created_at: 1528578226000,
    due_at: 1557763200000,
    title: 'item 2',
    pinned: true,
    completed: false,
    attachment: true,
    comment: 'meet him at Lorence Cafe'
  },
  {
    id: 1528578231000,
    created_at: 1528578231000,
    due_at: 0,
    title: 'item 4',
    pinned: true,
    completed: false,
    attachment: true,
    comment: 'meet her at Coffee Shop'
  },
  {
    id: 1528578236000,
    created_at: 1528578236000,
    due_at: 1560787200000,
    title: 'item 5',
    pinned: false,
    completed: false,
    attachment: false,
    comment: ''
  },
  {
    id: 1528578241000,
    created_at: 1528578241000,
    due_at: 0,
    title: 'item 1',
    pinned: false,
    completed: false,
    attachment: true,
    comment: ''
  },
  {
    id: 1528578246000,
    created_at: 1528578246000,
    due_at: 0,
    title: 'item 3',
    pinned: false,
    completed: true,
    attachment: false,
    comment: ''
  }
];

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(`https://api.github.com/users/${payload.username}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );

const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType('FETCH_TODOS'),
    mergeMap(() =>
      of(fakeTodos).pipe(map(response => fetchTodosFulfilled(response)))
    )
  );

const incrementEpic = action$ =>
  action$.pipe(
    ofType('INCREMENT_ASYNC'),
    delay(1000),
    map(({ payload }) => increment(payload.amount))
  );

const rootEpic = combineEpics(fetchUserEpic, fetchTodosEpic, incrementEpic);

export default rootEpic;
