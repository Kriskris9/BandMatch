import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "./styles/login.css";

const Login = (prop) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

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

    try {
      const { data } = await login({
        variable: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <main className="login">
      <div className="login-box">
        <h4>Login</h4>

        {data ? (
          <p>
            You are now logged in <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="formbox" onSubmit={handleFormSubmit}>
            <input
              className="login-form-input"
              placeholder="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="login-form-input"
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="login-btn"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && <div className="error-message">{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
