import React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../containers/Header';
import TodoPanel from './TodoPanel';

const App = () => (
  <React.Fragment>
    <Header />
    <TodoPanel />
  </React.Fragment>
);

export default hot(module)(App);
