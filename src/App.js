import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Router from './Router';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <div className="uk-light uk-padding">
      <div className="uk-grid uk-flex-center">
        <Router />
      </div>
    </div>
  </Provider>
)
