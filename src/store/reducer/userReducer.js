const initialState = {
  userArr: [],
  userLoading: false,
  userFetchError: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_START":
      return {
        ...state,
        userLoading: true,
      };
    case "USER_FETCH_SUCCESS":
      return {
        ...state,
        userArr: action.data,
        userLoading: false,
      };
    case "USER_FETCH_FAILED":
      return {
        ...state,
        userLoading: false,
        userFetchError: action.error,
      };
    default:
      return state;
  }
};
