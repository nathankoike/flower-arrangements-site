import React from "react";
import LangButton from "./LangButton";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <button className="NavbarButton" onClick={() => (location.href = "/")}>
            Home
          </button>
        </li>

        <li>
          <button className="NavbarButton" onClick={() => (location.href = "/portfolio")}>
            Portfolio
          </button>
        </li>

        <li>
          <button className="NavbarButton" onClick={() => (location.href = "/about")}>
            About
          </button>
        </li>

        <li>
          <button className="NavbarButton" onClick={() => (location.href = "contact")}>
            Contact
          </button>
        </li>

        <li> <LangButton /> </li>
      </ul>
    </div>
  );
};

export default Navbar;
