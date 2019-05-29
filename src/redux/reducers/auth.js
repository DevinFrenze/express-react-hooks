import hasSessionId from '../../utils/hasSessionId';
import {
  LOGGED_IN,
  LOG_IN_REJECTED,
  LOGGED_OUT,
  LOG_OUT_REJECTED,
} from '../actionTypes';

const initialState = {
  loggedIn: hasSessionId(),
  logInRejectedStatus: undefined,
  logOutRejectedStatus: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN: {
      return {
        loggedIn: true,
      };
    }
    case LOG_IN_REJECTED: {
      return {
        ...state,
        logInRejectedStatus: action.status,
      };
    }
    case LOGGED_OUT: {
      return {
        loggedIn: false,
      };
    }
    case LOG_OUT_REJECTED: {
      return {
        ...state,
        logOutRejectedStatus: action.status,
      };
    }
    default:
      return state;
  }
}
