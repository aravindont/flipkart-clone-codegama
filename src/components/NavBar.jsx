import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Code Gama Store
          </Link>
          <Link to="/cart" className="text-decoration-none">
            <FaCartPlus /> <span>0</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
