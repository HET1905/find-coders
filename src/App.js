import React, { Component } from "react";
import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavbarComp />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
