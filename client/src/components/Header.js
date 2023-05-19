import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "./styles/header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign("/login");
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
            {Auth.loggedIn() ? (
              <>
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
                <Link className="header-link" onClick={logout} to="/login">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <li>
                  <Link className="header-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link className="header-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
