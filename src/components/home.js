import React from "react";
import Navbar from "./Navbar";
import Langs from "../../langs.js"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: Langs, // the supported languages
      selectedLang: 0, // the index of the currently selected language
      text: "日本語", // the text on the language button
      page: "" // the data to be displayed
    }
  }

  // update the page with new data
  updatePage(data) {
    this.setState({ page: data.pageData });
  }

  // get data from the server
  fetchData(path) {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageState: this.state })
      };

      fetch(path, requestOptions)
          .then(response => response.json())
          .then(data => this.updatePage(data));
  }

  render() {
    return (
      <div>
        <div>
          <Navbar page={this} />
        </div>

        <div>
          <p> { this.state.page } </p>
        </div>
      </div>
    );
  }
};

export default Home;
