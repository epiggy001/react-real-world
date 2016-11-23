import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import { aboutSaga, jobsSaga } from './saga'
import App from './container/App';
import Job from './container/Job'
import About from './container/About'
import about from './reducers/about'
import jobs from './reducers/jobs'
import './index.css';

const sagaMiddleware = createSagaMiddleware()

let store = createStore(combineReducers({
  about,
  jobs,
  routing:routerReducer 
}), applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield [
    jobsSaga(),
    aboutSaga()
  ]
}

sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="about" component={About} />
        <Route path="Job" component={Job} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
