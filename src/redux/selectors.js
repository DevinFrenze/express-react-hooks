export const getLoggedIn = store => {
  return store.auth.loggedIn;
}

export const getLogInStatus = store => {
  return store.auth.logInRejectedStatus;
}

export const getLogOutStatus = store => {
  return store.auth.logOutRejectedStatus;
}
