import React, { Component } from "react";
import MasterButton from "./components/masterbutton.jsx";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15%"
        }}
      >
        <MasterButton color="blue" />
        <MasterButton color="red" />
        <MasterButton color="purple" />
        <MasterButton color="yellow" />
      </div>
    );
  }
}

export default App;
