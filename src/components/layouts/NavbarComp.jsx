import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = props => {
  const { icon, title } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <h1>
        <i className={icon} />
        <Navbar.Brand href="#home"> {title}</Navbar.Brand>
      </h1>
    </Navbar>
  );
};

NavbarComp.defaultProps = {
  title: "Find Coders",
  icon: "fa fa-user-secret"
};

NavbarComp.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavbarComp;
