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

    this.handleClick = this.handleClick.bind(this);

    // store the text for the button
    this.state = { text: props.state.text };
  }

  // propagate information back and change the state of the button
  handleClick(event) {
    // a function to quickly swap an index
    let swapLang = () => (this.st.selectedLang + 1) % this.st.langs.length;

    // go to the next language
    this.st.selectedLang = swapLang();

    // update the language
    this.st.text = this.st.langs[swapLang()];

    // update the button
    this.setState( {text: this.st.text} );
  }

  render() {
    return (
      <div>
        <button className="LangButton" onClick={this.handleClick}>
          {this.state.text}
        </button>
      </div>
    )
  }
};

export default LangButton;
