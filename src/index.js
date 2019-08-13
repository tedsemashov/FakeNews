import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import Analytics from './components/analytics/';
import Manage from "./components/manage/";
import Reports from "./components/reports/";
import Login from "./components/login/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
));

ReactDOM.render(
     <Provider store={store}>
        <Router>
           <Route exact path="/" component={Login} />
           <Route path="/analytics" component={Analytics} />
           <Route path="/manage" component={Manage} />
           <Route path="/reports" component={Reports} />
        </Router>
     </Provider>,
     document.getElementById('root')
);

serviceWorker.unregister();
