import {
  LOGGED_IN,
  LOGGED_OUT,
  LOG_IN_REJECTED,
  LOG_OUT_REJECTED,
} from './actionTypes';

// auth action creators
export const loggedIn = () => ({ type: LOGGED_IN });
export const loggedOut = () => ({ type: LOGGED_OUT });
export const logInRejected = ({ status }) => ({
  type: LOG_IN_REJECTED,
  status,
});
export const logOutRejected = ({ status }) => ({
  type: LOG_OUT_REJECTED,
  status,
});
