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

  // send a post request to get the relevant data and render it
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

  render() {
    return <Navbar state={this.state}/>;
  }
};

export default Home;
