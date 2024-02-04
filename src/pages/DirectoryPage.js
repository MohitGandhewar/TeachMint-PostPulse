import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import UserItem from "../components/UserItem";

const DirectoryPage = (props) => {
  const Users = useSelector((state) => state.users);
  // useEffect(() => {
  //   console.log(Users, "Users");
  // }, [Users]);

  // if (Users.userLoading && Boolean(Users.userFetchError)) {
  //   return <>{Users.userFetchError}</>;
  // }
  return (
    <div className="User-Container">
      <h2>DirectoryPage</h2>
      {Users.userLoading ? (
        <Loader />
      ) : (
        <ul className="User-List" style={{ margin: "0 auto" }}>
          {Users?.userArr?.map((item, index) => {
            return (
              <li
                style={{ listStyle: "none", margin: "0 auto", padding: "0" }}
                key={index}
                onClick={() => props.openUserCard(item)}
              >
                <UserItem data={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DirectoryPage;
