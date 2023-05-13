import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <h1 className="m-0">BandMatch</h1>
        </div>
        <nav>
          <ul className="flex-row align-center">
            <li className="mx-1">
              <Link className="btn btn-lg btn-light m-2" to="/users">
                Users
              </Link>
            </li>
            <li className="mx-1">
              <Link className="btn btn-lg btn-light m-2" to="/profile">
                Profile
              </Link>
            </li>
            <li className="mx-1">
              <Link className="btn btn-lg btn-light m-2" to="/">
                Feed
              </Link>
            </li>
            <li className="mx-1">
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
            </li>
            {Auth.loggedIn() ? (
              <>
                <span>Hey there, {Auth.getProfile().data.username}!</span>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
                {/* <Link className="btn btn-lg btn-light m-2" to="/">
                Home
              </Link> */}
              </>
            ) : (
              <li>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
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
