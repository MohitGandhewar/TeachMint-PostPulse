import React from "react";

const UserItem = (props) => {
  return (
    <div
      style={{
        width: "80vw",
        display: "flex",
        justifyContent: "space-between",
        background: "linear-gradient(to right, #FF7878,#f4a698)",
        margin: "4px",
        padding: "6px 15px",
        borderRadius: "8px",
      }}
      id={props?.data?.id}
    >
      <p>Name : {props?.data?.name}</p>
      <p>Posts : {props?.data?.postsCount}</p>
    </div>
  );
};

export default UserItem;
