import React from 'react';

export const responses = Object.freeze({
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

export default ({ response }) => {
  return (
    <p className={`uk-text-center ${responseTextClass[response]}`}>
      {responseText[response]}
    </p>
  );
};
