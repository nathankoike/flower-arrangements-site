import React from "react";
import LangButton from "./LangButton";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // the state of the whole webapp
    this.st = props.state;
  }

  check(){
    
  }

  render() {
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

          <li> <LangButton state={this.st, this.check} /> </li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
