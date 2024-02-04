import { userFetchSuccess } from "../store/action/userAction";

export const getNumberOfPostsByUser = (posts, users, dispatch) => {
  function countObjectsByUserId(data) {
    const userIdToCount = {};
    data.forEach((obj) => {
      const { userId } = obj;
      if (!userIdToCount[userId]) {
        userIdToCount[userId] = 0;
      }
      userIdToCount[userId]++;
    });
    return userIdToCount;
  }
  const userIdCounts = countObjectsByUserId(posts);
  // console.log(userIdCounts, "userIdCounts");
  let usersWithPostsCount = users.map((item) => {
    return { ...item, postsCount: userIdCounts[item.id] };
  });
  // console.log(usersWithPostsCount, "usersWithPostsCount");
  dispatch(userFetchSuccess(usersWithPostsCount));
};
