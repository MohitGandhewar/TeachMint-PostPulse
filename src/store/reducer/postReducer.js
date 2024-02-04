const initialState = {
  postArr: [],
  postLoading: false,
  postFetchError: "",
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_FETCH_START":
      return {
        ...state,
        postLoading: true,
      };
    case "POST_FETCH_SUCCESS":
      return {
        ...state,
        postArr: action.data,
        postLoading: false,
      };
    case "POST_FETCH_FAILED":
      return {
        ...state,
        postLoading: false,
        postFetchError: action.error,
      };
    default:
      return state;
  }
};
