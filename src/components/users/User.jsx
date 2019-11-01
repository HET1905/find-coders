import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      blog,
      bio,
      followers,
      location,
      hireable,
      html_url
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div>
        <div
          className="card mt-2 px-2"
          style={{ width: "400px", height: "600px" }}
        >
          <h1 className="card-title">{name}</h1>
          <h4>{location}</h4>
          <h5>
            Hireable :{" "}
            {hireable ? (
              <i class="fa fa-check"></i>
            ) : (
              <i class="fa fa-times-circle"></i>
            )}
          </h5>

          <img
            src={avatar_url}
            alt="avtar"
            className="rounded-circle card-img-top"
            style={{ width: "150px" }}
          />
          <div className="card-body">
            <p>
              Blog : <Link to={blog}>{blog}</Link>
            </p>
            <p>Bio : {bio}</p>
            <p>Followers : {followers}</p>
            <a href={html_url} className="btn btn-primary">
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
