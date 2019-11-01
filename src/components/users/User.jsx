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
      following,
      public_gists,
      public_repos,
      location,
      hireable,
      html_url
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div>
        <div
          className="card cardUser mt-2 px-2 text-center"
          style={{ width: "600px", height: "auto" }}
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
            className="card-img-top rounded-circle mx-auto"
            style={{ width: "150px" }}
          />
          <div className="card-body">
            <p>
              Website : <a href={blog}>{blog}</a>
            </p>
            <p>Bio : {bio}</p>

            <a href={html_url} className="btn btn-primary">
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <div
          className="card infoCard"
          style={{ width: "600px", height: "auto" }}
        >
          <span className="badge badge-primary">Followers : {followers}</span>
          <span class="badge badge-secondary">Following : {following}</span>
          <span class="badge badge-success">Public Repos : {public_repos}</span>
          <span class="badge badge-danger">Public Gists : {public_gists}</span>
        </div>
      </div>
    );
  }
}
export default User;
