import React from "react";

class LangButton extends React.Component {
  // accepts a json object that is the state of the whole webapp
  // this json object contains the following
  //          langs: a list of supported languages
  //   selectedLang: the index of the currently selected language
  //           text: the text to display on the button
  constructor(props) {
    super(props);

    // the state of the webapp
    this.st = props.state;

    // a function to check that the button click is registering
    this.check = props.check;

    this.handleClick = this.handleClick.bind(this);
  }

  // update the state of the button to reflect the changes
  updateState(){
    // a function to quickly swap an index
    let swapLang = () => (this.st.selectedLang + 1) % this.st.langs.length;

    // go to the next language
    this.setState({ selectedLang: swapLang() });

    // update the language
    let newText = this.st.langs[swapLang()];

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
        <button className="LangButton" onClick={this.handleClick}>
          {this.st.text}
        </button>
      </div>
    )
  }
};

export default LangButton;
