import React from "react";
import LangButton from "./LangButton";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // the whole webapp
    this.page = props.page;

    // button text variations
    this.text = {
      home: ['Home', 'ホーム'],
      portfolio: ['Portfolio', 'ポートフォリオ'],
      about: ['About', 'business_nameとは？'],
      contact: ['Contact', '会社概要']
    };

    this.state = {
      homeText: 'Home',
      portfolioText: 'Portfolio',
      aboutText: 'About',
      contactText: 'Contact'
    };
  }

  updateState(nextLang) {
    this.setState({ homeText: this.text.home[nextLang] });
    this.setState({ portfolioText: this.text.portfolio[nextLang] });
    this.setState({ aboutText: this.text.about[nextLang] });
    this.setState({ contactText: this.text.contact[nextLang] });

    // update the page
    this.page.updateState(nextLang)
  }

  render() {
    return (
      <div>
        <ul className="Navbar">
          <li>
            <button className="NavbarButton" onClick= { () => (this.page.fetchData('/home'))}>
              { this.state.homeText }
            </button>
          </li>

          <li>
            <button className="NavbarButton" onClick={() => (this.page.fetchData('/portfolio'))}>
              { this.state.portfolioText }
            </button>
          </li>

          <li>
            <button className="NavbarButton" onClick={() => (this.page.fetchData('/about'))}>
              { this.state.aboutText }
            </button>
          </li>

          <li>
            <button className="NavbarButton" onClick={() => (this.page.fetchData('/contact'))}>
              { this.state.contactText }
            </button>
          </li>

          <li> <LangButton id="LangButton" bar={this} /> </li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
