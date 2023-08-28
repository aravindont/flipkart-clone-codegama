import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Code Gama Store
          </Link>
          <Link to="/cart" className="text-decoration-none">
            <FaCartPlus style={{ fontSize: "44px" }} />{" "}
            <span className="fs-6 ">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
