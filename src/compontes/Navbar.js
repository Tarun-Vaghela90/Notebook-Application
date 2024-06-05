import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  let location = useLocation();
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-2">
      <Link className="navbar-brand" to="/#">
        iNotebook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname ==="/" ? "active":""}`}>
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className={`nav-item ${location.pathname ==="/" ? "active":""}`}>
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
        </ul>
        <form  className="d-flex  ">
          <Link className="btn btn-primary mx-1" to="/Login" role="button">Login</Link>
          <Link className="btn btn-primary mx-1" to="/Signup" role="button">Signup</Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
