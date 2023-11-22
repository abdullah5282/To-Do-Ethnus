import React from "react";
import { Link } from "react-router-dom";
import Random from "../imgs/Random.png";
import "../styles/Nav.css";
function Nav() {
  return (
    <nav className="navbar fixed navbar-light ">
      <Link to="/" className="navbar-brand mx-3">
        <img src={Random} alt="asdfasdf" height="40px" width="40px" />
      </Link>
      <div className="nav">
        <Link to="/create-task" className="nav-link mx-3">
          Create Task
        </Link>
        {/* <Link to="/task-list" className="nav-link mx-2">
          Task-list
        </Link> */}
        <Link to="/about-us" className="nav-link mx-2 ">
          About us
        </Link>
        <Link to="/contact-us" className="nav-link mx-2  ">
          Contact us
        </Link>
        <Link to="/" className="nav-link mx-2  ">
          Log Out
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
