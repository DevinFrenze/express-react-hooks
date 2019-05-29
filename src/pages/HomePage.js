import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../services/authService';
import InputWrapper from './InputWrapper';

export default () => {
  const dispatch = useDispatch();

  const handleClick = async (event) => {
    event.preventDefault();
    const action = await logout();
    dispatch(action);
  };

  return (
    <div className="uk-section">
      <h1>Home</h1>
      <InputWrapper className="uk-margin-medium">
        <button
          className="uk-button uk-button-default uk-width-expand"
          onClick={handleClick}
        >
          Log Out
        </button>
      </InputWrapper>
    </div>
  );
};
