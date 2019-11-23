import React, { Component } from "react";
import "../index.css";

class PurpleButton extends Component {
  constructor(props) {
    super(props);
    this.makePurple = this.makePurple.bind(this);
  }

  makePurple = event => {
    document.body.style = "background: purple;";
  };

  render() {
    return (
      <button onClick={this.makePurple} className="purpleButton">
        Make Me Purple!
      </button>
    );
  }
}

export default PurpleButton;
