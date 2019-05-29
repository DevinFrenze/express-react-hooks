import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../services/authService';
import InputWrapper from './InputWrapper';
import LoginResponse from './LoginResponse';

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const action = await login({ username, password });
    dispatch(action);
  };

  return (
    <div className="uk-section">
      <h1>Log In</h1>
      <hr className="uk-divider-small"/>
      <form className="uk-form" onSubmit={handleSubmit}>

        <InputWrapper label="Username">
          <input
            className="uk-input"
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </InputWrapper>

        <InputWrapper label="Password">
          <input
            className="uk-input"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputWrapper>

        <InputWrapper className="uk-margin-medium">
          <input
            className="uk-button uk-button-default uk-width-expand"
            type="submit"
            value="Log In"
          />
        </InputWrapper>

      </form>
      <LoginResponse />
    </div>
  );
};
