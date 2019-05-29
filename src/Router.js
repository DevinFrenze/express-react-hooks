import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom';

import { Home, Login } from './pages';
import { getLoggedIn } from './redux/selectors';

export default () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <BrowserRouter>
      <Route path="/" exact render={() => (
        isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
      )}/>
      <Route path="/home" exact render={() => (
        isLoggedIn ? <Home /> : <Redirect to="/login" />
      )} />
      <Route path="/login" exact render={() => (
        isLoggedIn ? <Redirect to="/home" /> : <Login />
      )} />
    </BrowserRouter>
  );
};

