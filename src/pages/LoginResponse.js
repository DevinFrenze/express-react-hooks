import React from 'react';
import { useSelector } from 'react-redux';

import { getLogInStatus } from '../redux/selectors';

const responses = Object.freeze({
  none: 0,
  success: 1,
  failure: 2,
  error: 3,
});

const responseText = Object.freeze({
  [responses.none]: '',
  [responses.success]: 'log in success',
  [responses.failure]: 'log in failure',
  [responses.error]: 'log in error',
});

const responseTextClass = Object.freeze({
  [responses.none]: 'uk-text-muted',
  [responses.success]: 'uk-text-muted',
  [responses.failure]: 'uk-text-danger',
  [responses.error]: 'uk-text-warning',
});

export default () => {
  const logInStatus = useSelector(getLogInStatus);

  let response = responses['none'];
  if (logInStatus === 200) response = responses['success'];
  else if (logInStatus >= 500) response = responses['error'];
  else if (logInStatus >= 400) response = responses['failure'];

  return (
    <p className={`uk-text-center ${responseTextClass[response]}`}>
      {responseText[response]}
    </p>
  );
};
