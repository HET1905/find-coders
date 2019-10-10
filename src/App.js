import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <h1>Find coders</h1> */}
      </div>
    );
  }
}

export default App;
