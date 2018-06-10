import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { increment, fetchUserFulfilled } from '../actions';

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(`https://api.github.com/users/${payload.username}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );

const incrementEpic = action$ =>
  action$.pipe(
    ofType('INCREMENT_ASYNC'),
    delay(1000),
    map(({ payload }) => increment(payload.amount))
  );

const rootEpic = combineEpics(fetchUserEpic, incrementEpic);

export default rootEpic;
