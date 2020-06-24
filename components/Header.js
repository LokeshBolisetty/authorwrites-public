import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#1">Home</a>
        <a href="#2">About</a>
        <a href="#3">Contact Me</a>
      </nav>
      <div className="search">
        <input placeholder="Search" />
        <img
          src={require("../Images/search image.png")}
          alt="Search"
          height="32px"
        />
      </div>
    </header>
  );
};
export default Header;
