import React from "react";
import "./Post.css";
function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1596107034444-43bcfb3a2918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&q=80"
      />
      <h4>Username: caption.</h4>
    </div>
  );
}

export default Post;
