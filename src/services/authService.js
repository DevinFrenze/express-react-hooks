import hasSessionId from '../utils/hasSessionId';
import {
  loggedIn,
  loggedOut,
  logInRejected,
  logOutRejected,
} from '../redux/actionCreators';

export const login = async ({ username, password }) => {
  try {
    const { status } = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (status === 200 && hasSessionId()) return loggedIn();
    else return logInRejected({ status });
  } catch(e) {
    console.error(e);
  }

}

export const logout = async () => {
  try {
    const { status } = await fetch('/logout');
    if (status === 200 && !hasSessionId()) return loggedOut();
    else return logOutRejected({ status });
  } catch(e) {
    console.error(e);
  }
}
