import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Imgage from "react-bootstrap/Image";

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: "id",
      login: "Mojombo",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    };
  }
  render() {
    return (
      <div id="cardContainer">
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Imgage
            className="mx-auto"
            roundedCircle
            src={this.state.avatar_url}
            style={{ width: "7rem", height: "7rem" }}
          />
          <Card.Body>
            <Card.Title className="mx-auto">{this.state.login}</Card.Title>
            <Card.Text className="mx-auto">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link
              href={this.state.html_url}
              className="btn btn-primary btn-sm"
            >
              Card Link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserItem;
