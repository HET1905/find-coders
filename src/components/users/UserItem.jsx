import React from "react";
import Card from "react-bootstrap/Card";
import Imgage from "react-bootstrap/Image";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="cardContainer">
      <Card>
        <Imgage
          className="mx-auto"
          roundedCircle
          src={avatar_url}
          style={{ width: "7rem", height: "7rem" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{login}</Card.Title>

          <Card.Link href={html_url} className="btn btn-primary btn-sm">
            More
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserItem;
