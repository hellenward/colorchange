import React, { Component } from "react";

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
        Turn Me Yellow!
      </button>
    );
  }
}

export default YellowButton;
