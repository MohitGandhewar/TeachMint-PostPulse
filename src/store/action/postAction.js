export const postFetchStart = () => {
  return {
    type: "POST_FETCH_START",
  };
};
export const postFetchSuccess = (data) => {
  return {
    type: "POST_FETCH_SUCCESS",
    data: data,
  };
};
export const postFetchFailed = (error) => {
  return {
    type: "POST_FETCH_FAILED",
    error: error,
  };
};
