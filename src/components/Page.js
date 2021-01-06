import React from "react";
import Navbar from "./Navbar";
import Langs from "../../langs.js";

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: Langs, // the supported languages
      selectedLang: 0, // the index of the currently selected language
      text: "日本語", // the text on the language button
      path: "/home",
      page: null // the data to be displayed
    }
  }

  formatData(data) {
    console.log(data);

    // get the images from the post response
    let imgs = [];

    let url = data.imgs[0][0].split('server')[1];
    console.log(url);

    url = (__dirname + "../../server" + url);

    console.log(url);

    imgs.push(<img key='0' src={ (__dirname + "../../server" + url) } />);

    // data.imgs.forEach((image, i) => {
    //   // push just the image name
    //   imgs.push(<img key={i} src={ require(image[0]) } />);
    // });

    return (
      <div>
        <div>
          <h1> { data.text } </h1>
        </div>

        <div>
          {imgs}
        </div>
      </div>
    )
  }

  // update the page with new data
  updatePage(data) {
    this.setState({ page: this.formatData(data.data) });
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
