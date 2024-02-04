import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import "../components/PostCard.css";
const UserDetailPage = (props) => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
  ]);
  const currentUser = props.user;

  const setSelectedCountry = (event) => {
    const { value } = event.target;
    setCountry(value);
  };
  return (
    <div className="User-Container">
      <div className="User-Profile">
        <div className="Top-Section">
          <span onClick={() => navigate(`/`)}>
            <KeyboardBackspaceIcon />
            Back To
          </span>
          <div>
            <input
              select="true"
              onChange={(e) => setSelectedCountry(e)}
              list="fruitOptions"
              id="fruits"
              name="fruits"
            />
            <datalist id="fruitOptions">
              {fruits.map((fruit, index) => (
                <option key={index} value={fruit} />
              ))}
            </datalist>
          </div>
        </div>
        <div className="User-Details">
          <p className="User-Name">{currentUser?.name}</p>
          <p className="User-Name">{currentUser?.username}</p>
          <p className="User-Address">
            <span>{currentUser?.address?.suite} &nbsp;</span>
            <span>{currentUser?.address?.street} &nbsp;</span>
            <span>{currentUser?.address?.city} &nbsp;</span>
            <span>{currentUser?.address?.zipcode} &nbsp;</span>
          </p>
          <p className="User-Name">{currentUser?.email}</p>
          <p className="User-Name">{currentUser?.phone}</p>
        </div>
      </div>
      <div className="User-Posts">
        <div className="card-container">
          {currentUser.posts?.map((post, i) => {
            return <PostCard key={post.id} id={i} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
