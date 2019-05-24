import React, { useState } from 'react';
import InputWrapper from './InputWrapper';
import LoginResponse, { responses } from './LoginResponse';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(responses.none);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newResponse;

    try {
      const { status } = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (status === 200) newResponse = responses.success;
      else newResponse = responses.failure; 
    } catch(e) {
      newResponse = responses.error;
    }

    setResponse(newResponse);
  };

  return (
    <React.Fragment>
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

        <InputWrapper>
          <input
            className="uk-input uk-button uk-button-default uk-width-1-1"
            type="submit"
            value="Log In"
          />
        </InputWrapper>

      </form>
      <LoginResponse response={response} />
    </React.Fragment>
  );
};
