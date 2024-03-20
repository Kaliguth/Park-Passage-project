import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light fixed-top pb-0">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li>
            <Link
              to="/"
              className="navbar brand position-absolute top-0 start-0"
            >
              <img src="hiking.ico" alt="logo" width="50" height="50" />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              <p>
                <b>Home</b>
              </p>
            </Link>
          </li>
          <li>
            <Link to="parks" className="nav-link">
              <p>
                <b>National parks</b>
              </p>
            </Link>
          </li>
          <li>
            <Link to="about" className="nav-link">
              <p>
                <b>About</b>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
