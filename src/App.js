import React, { Component } from "react";
import axios from "axios";
import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="container-fluid">
        <NavbarComp />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
