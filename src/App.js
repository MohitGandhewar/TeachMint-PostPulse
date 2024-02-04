import { createRef, useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DirectoryPage from "./pages/DirectoryPage";
import UserDetailPage from "./pages/UserDetailPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getPostsData, getUsersData } from "./services/api";
import Navbar from "./components/Navbar";
import { getNumberOfPostsByUser } from "./services/common";

function App() {
  const scrollElement = createRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Posts = useSelector((state) => state.posts);
  const Users = useSelector((state) => state.users);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (scrollElement.current) {
      window.scrollContainer = scrollElement.current;
    }
  }, [scrollElement]);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  useEffect(() => {
    if (Users.userArr.length > 0 && Posts.postArr.length > 0) {
      getNumberOfPostsByUser(Posts.postArr, Users.userArr, dispatch);
    }
  }, [Posts.postArr]);

  const openUserCard = useCallback((newValue) => {
    setUser(newValue);
    // console.log(newValue);
    navigate(`/user/${newValue.id}`);
  }, []);

  return (
    <div className="App" ref={scrollElement}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<DirectoryPage openUserCard={openUserCard} />}
        />
        <Route path="/user/:userId" element={<UserDetailPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
