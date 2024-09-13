import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#FF4000" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            FinProH8
          </Link>
          <Search />
        </div>
      </nav>
    </>
  );
};

export default Header;
