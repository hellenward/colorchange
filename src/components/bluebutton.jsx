import React, { Component } from "react";

class BlueButton extends Component {
  constructor(props) {
    super(props);
    this.makeBlue = this.makeBlue.bind(this);
  }

  makeBlue = event => {
    document.body.style = "background: blue;";
  };

  render() {
    return (
      <button onClick={this.makeBlue} className="blueButton">
        Make Me Blue!
      </button>
    );
  }
}

export default BlueButton;
