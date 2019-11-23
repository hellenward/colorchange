import React, { Component } from "react";
import "../index.css";

class YellowButton extends Component {
  constructor(props) {
    super(props);
    this.makeYellow = this.makeYellow.bind(this);
  }

  makeYellow = event => {
    document.body.style = "background: yellow;";
  };

  render() {
    return (
      <button onClick={this.makeYellow} className="yellowButton">
        Make Me Yellow!
      </button>
    );
  }
}

export default YellowButton;
