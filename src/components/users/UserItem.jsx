import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Imgage from "react-bootstrap/Image";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div id="cardContainer">
        <Card>
          <Imgage
            className="mx-auto"
            roundedCircle
            src={avatar_url}
            style={{ width: "7rem", height: "7rem" }}
          />
          <Card.Body className="text-center">
            <Card.Title>{login}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href={html_url} className="btn btn-primary btn-sm">
              More
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserItem;
