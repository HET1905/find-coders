import React, { Component } from "react";
import axios from "axios";
import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="container-fluid">
        <NavbarComp />
        <div className="container">
          {/* receving the props from child component passsing it to App */}
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
