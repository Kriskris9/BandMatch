import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './login.css';
import backgroundImage from '../assets/background.jpg';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    // Add some validation to check whether the fields are empty or not
    if (!formState.email || !formState.password) {
      return;
    }

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({ email: '', password: '' });
  };

  // Use destructuring assignment to simplify the formState
  const { email, password } = formState;

  return (
    <main>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-form">
          <h4>Login</h4>
          {data ? (
            <p>
              You are now logged in{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  className="form-input"
                  placeholder="Type your email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  className="form-input"
                  placeholder="Type your password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}

          {error && <div>{error.message}</div>}
        </div>
      </div>
    </main>
  );
};
export default Login;