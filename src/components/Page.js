import React from "react";
import Navbar from "./Navbar";
import Langs from "../../langs.js"

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: Langs, // the supported languages
      selectedLang: 0, // the index of the currently selected language
      text: "日本語", // the text on the language button
      path: "/home",
      page: "" // the data to be displayed
    }
  }

  formatData(data) {
    console.log(data);
  }

  // update the page with new data
  updatePage(data) {
    this.setState(this.formatData(data.data));
  }

  // get data from the server
  fetchData() {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageState: this.state })
      };

      fetch(this.state.path, requestOptions)
          .then(response => response.json())
          .then(data => this.updatePage(data));
  }

  // switch which page is being shown
  switch(newPath) {
    this.state.path = newPath;
    this.fetchData();
  }

  // switch the language of the page
  updateState(nextLang) {
    // go to the next language
    this.state.selectedLang = nextLang;

    // update the language
    this.state.text = this.state.langs[this.state.selectedLang];

    this.fetchData();
  }

  // immediately load the page
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <div>
          <Navbar page={this} />
        </div>

        <div className='content'>
          { this.state.page }
        </div>
      </div>
    );
  }
};

export default Page;
