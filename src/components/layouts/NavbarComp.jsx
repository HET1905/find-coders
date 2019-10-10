import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";

class NavbarComp extends Component {
  static defaultProps = {
    title: "Find Coders",
    icon: "fa fa-user-secret"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <h1>
          <i className={this.props.icon} />
          <Navbar.Brand href="#home"> {this.props.title}</Navbar.Brand>
        </h1>
      </Navbar>
    );
  }
}

export default NavbarComp;
