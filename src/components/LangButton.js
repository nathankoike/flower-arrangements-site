import React from "react";

class LangButton extends React.Component {
  // accepts a json object that is the state of the whole webapp
  // this json object contains the following
  //          langs: a list of supported languages
  //   selectedLang: the index of the currently selected language
  //           text: the text to display on the button
  constructor(props) {
    super(props);

    // propagate the information back up
    this.bar = props.bar;

    // store the text for the button
    this.state = { text: props.bar.page.state.text };

    this.handleEvent = this.handleEvent.bind(this);
  }

  swapLang() {
    console.log(this.bar.page.state.selectedLang);

    return (this.bar.page.state.selectedLang + 1) % this.bar.page.state.langs.length;
  }

  // propagate information back and change the state of the button
  handleEvent(event) {
    // go to the next language
    this.bar.page.setState({ selectedLang: this.swapLang() });

    // update the language
    this.bar.page.setState({ text: this.bar.page.state.langs[this.swapLang()] });

    // update the button
    this.setState( {text: this.bar.page.state.text} );

    // console.log(this.bar.page.state.selectedLang, this.bar.page.state.text);

    this.bar.updateState();
  }

  render() {
    return (
      <div>
        <button className="LangButton" onClick={this.handleEvent}>
          {this.state.text}
        </button>
      </div>
    )
  }
};

export default LangButton;
