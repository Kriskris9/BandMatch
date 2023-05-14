import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "./styles/header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="header-container">
        <div>
          <h1>
            <Link className="header-link" to="/feed">
              BandMatch
            </Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="header-link" to="/users">
                Users
              </Link>
            </li>
            <li>
              <Link className="header-link" to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <Link className="header-link" to="/login">
                Login
              </Link>
            </li>
            {Auth.loggedIn() ? (
              <>
                <span>Hey there, {Auth.getProfile().data.username}!</span>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <li>
                <Link className="header-link" to="/signup">
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
