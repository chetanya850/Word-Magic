import React from "react";
import { Link } from "react-router-dom";

function Header(props) {

  const myStyle = {
    color: props.colormode,
  }


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <Link className="navbar-brand mx-2" to="/">
          WORD MAGIC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" onClick={props.toggleDark} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={myStyle} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </nav>
    </>
  );
};

export default Header
