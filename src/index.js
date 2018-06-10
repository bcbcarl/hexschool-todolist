import React from 'react';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import App from './components/App';
import rootReducer from './reducers';
import rootEpic from './epics';
import registerFontAwesome from './internal/registerFontAwesome';

import './styles.css';

const composeEnhancers = composeWithDevTools({});
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

registerFontAwesome();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
