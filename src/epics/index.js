import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { increment, fetchTodosFulfilled, fetchUserFulfilled } from '../actions';
import fakeTodos from '../data/todos';

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(`https://api.github.com/users/${payload.username}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );

const restoreTodosEpic = action$ =>
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

const rootEpic = combineEpics(fetchUserEpic, restoreTodosEpic, incrementEpic);

export default rootEpic;
