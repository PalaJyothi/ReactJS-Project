import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/login', { email, password })
      .then(response => {
        localStorage.setItem('userToken', response.data.token);
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;