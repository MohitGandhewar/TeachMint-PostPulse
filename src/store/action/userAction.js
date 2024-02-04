export const userFetchStart = () => {
  return {
    type: "USER_FETCH_START",
  };
};
export const userFetchSuccess = (data) => {
  return {
    type: "USER_FETCH_SUCCESS",
    data: data,
  };
};
export const userFetchFailed = (error) => {
  return {
    type: "USER_FETCH_FAILED",
    error: error,
  };
};
