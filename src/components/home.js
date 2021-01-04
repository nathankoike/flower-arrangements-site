import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: ["Eng", "日本語"], // the supported languages
      selectedLang: 0, // the index of the currently selected language
      text: "日本語", // the text on the language button
      postId: "" // the data to be displayed
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar state={ this.state } />
        </div>

        <div>
          <p> { "some text here" } </p>
        </div>
      </div>
    );
  }
};

export default Home;
