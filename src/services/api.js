import {
  postFetchFailed,
  postFetchStart,
  postFetchSuccess,
} from "../store/action/postAction";
import {
  userFetchFailed,
  userFetchStart,
  userFetchSuccess,
} from "../store/action/userAction";

export const fetchData = async (dispatch) => {
  try {
    const [userData, postData] = await Promise.all([
      getUsersData(dispatch),
      getPostsData(dispatch),
    ]);
    if (userData && postData) {
      const postsByUserId = {};

      // Group posts by userId
      postData.forEach((post) => {
        if (!postsByUserId[post.userId]) {
          postsByUserId[post.userId] = [];
        }
        postsByUserId[post.userId].push(post);
      });

      // Map through users array and add posts to each user
      const usersWithPosts = userData.map((user) => ({
        ...user,
        posts: postsByUserId[user.id] || [], // If user has no posts, assign an empty array
      }));

      // Output the result
      // console.log(usersWithPosts);

      dispatch(userFetchSuccess(usersWithPosts));
      dispatch(postFetchSuccess(postData));
    } else {
      dispatch(userFetchFailed("Failed to fetch data"));
      dispatch(postFetchFailed("Failed to fetch data"));
    }
  } catch (error) {
    dispatch(userFetchFailed(error));
    dispatch(postFetchFailed(error));
  }
};

export const getUsersData = (dispatch) => {
  dispatch(userFetchStart());
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        dispatch(userFetchFailed("Failed to fetch users"));
      }
      return response.json();
    })
    .then((users) => {
      // console.log(users, "Users.userLoading");
      return users;
    })
    .catch((error) => {
      // console.error("Error fetching users:", error);
      return error;
    });
};
export const getPostsData = (dispatch) => {
  dispatch(postFetchStart());
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        dispatch(postFetchFailed("Failed to fetch posts"));
      }
      return response.json();
    })
    .then((posts) => {
      // console.log(posts, "posts.userLoading");
      return posts;
    })
    .catch((error) => {
      return error;
    });
};
