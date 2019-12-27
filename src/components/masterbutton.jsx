import React, { Component } from "react";

class MasterButton extends Component {

  handleClick = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <button
        className={`masterButton masterButton--${this.props.color}`}
        onClick={() => this.handleClick(this.props.color)}
      >
        {this.props.color}{" "}
      </button>
    );
  }
}

export default MasterButton;
