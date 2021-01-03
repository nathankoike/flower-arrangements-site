import React from "react";



class Button extends React.Component {
  constructor(props) {
    super(props);

    // a list of all supported languages
    this.langs = ["Eng", "日本語"];

    // manage the state of the button
    this.state = {
      // the index of the currently selected lanuguage
      selectedLang: 0,

      // the index of the text to display
      text: "日本語"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // update the state of the button to reflect the changes
  updateState(){
    // a function to quickly swap an index
    let swapLang = () => (this.state.selectedLang + 1) % this.langs.length;

    // go to the next language
    this.setState({ selectedLang: swapLang() });

    // update the language
    let newText = this.langs[swapLang()];

    // update the language
    this.setState({
      text: newText
    });
  }

  handleClick(event) {
    this.updateState();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> {this.state.text} </button>
      </div>
    )
  }
  // return (
  //   <button onClick=func>text</button>;
  // );
};

export default Button;
