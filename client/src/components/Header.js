import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./Header.css";


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <h1>BandMatch</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/feed">
              Feed
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button onClick={logout}>
              Logout
            </button>
          </>
          ) : (
            <li>
              <Link to="/signup">
                Signup
              </Link>
            </li>
          )}
        </ul>
      </nav>    
    </header>
  );
};

export default Header;