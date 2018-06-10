import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const GitHubUser = ({ username, dispatch }) => (
  <div>
    <p>username: {username}</p>
    <button onClick={() => dispatch(fetchUser('bcbcarl'))}>fetch</button>
  </div>
);

const mapStateToProps = state => ({
  username: state.username
});

export default connect(mapStateToProps)(GitHubUser);
