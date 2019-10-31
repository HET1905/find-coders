import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlerts = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });

    setTimeout(
      () =>
        this.setState({
          alert: null
        }),
      5000
    );
  };
  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <NavbarComp />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    {/* receving the props from child component passsing it to App */}
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlerts={this.setAlerts}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
