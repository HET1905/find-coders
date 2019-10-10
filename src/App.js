import React, { Component } from "react";
import NavbarComp from "./components/layouts/NavbarComp";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComp />
        <UserItem />
      </div>
    );
  }
}

export default App;
