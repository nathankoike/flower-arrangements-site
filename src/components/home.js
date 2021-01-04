import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: ["Eng", "日本語"],
      selectedLang: 0,
      text: "日本語"
    }
  }

  render() {
    return <Navbar state={this.state}/>;
  }
};

export default Home;
