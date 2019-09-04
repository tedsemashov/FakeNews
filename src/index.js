import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import Analytics from './components/analytics/';
import Manage from './components/manage/';
import Expert from './components/expert/';
import Reports from './components/reports/';
import Login from './components/login/';
import { PrivateRoute } from './components/private-rout/PrivateRoute';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/analytics" component={Analytics} />
      <PrivateRoute path="/manage" component={Manage} />
      <PrivateRoute path="/expert" component={Expert} />
      <PrivateRoute path="/reports" component={Reports} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
