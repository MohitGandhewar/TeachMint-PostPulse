import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { postReducer } from "./reducer/postReducer";
export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});
