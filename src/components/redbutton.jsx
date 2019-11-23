import React, { Component } from "react";

class RedButton extends Component {
  constructor(props) {
    super(props);
    this.makeRed = this.makeRed.bind(this);
  }

  makeRed = event => {
    document.body.style = "background: red;";
  };

  render() {
    return (
      <button onClick={this.makeRed} className="redButton">
        Make Me Red!
      </button>
    );
  }
}

export default RedButton;
