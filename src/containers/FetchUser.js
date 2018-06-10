/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

let FetchUser = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchUser(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Fetch</button>
      </form>
    </div>
  );
};

FetchUser = connect()(FetchUser);

export default FetchUser;
