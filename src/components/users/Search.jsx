import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";

class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    // passing the props to upper level
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search coders......."
          />
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </Form>
      </div>
    );
  }
}

export default Search;
