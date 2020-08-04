import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="Rahul"
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1596280813649-7a07bc162282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <h4 className="post__text">
        <strong>Munish: </strong>I love to vlog with these awesome cameras.
      </h4>
    </div>
  );
}

export default Post;
