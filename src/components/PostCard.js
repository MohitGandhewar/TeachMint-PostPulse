import React from "react";
import "./PostCard.css";
import Paper from "@mui/material/Paper";

const PostCard = (props) => {
  return (
    <Paper className="post-card">
      {/* <h2>User ID: {props.post.userId}</h2> */}
      {/* <p>ID: {props.post.id}</p> */}
      <h3>Title: {props.post.title}</h3>
      <p>Body: {props.post.body}</p>
    </Paper>
  );
};

export default PostCard;
