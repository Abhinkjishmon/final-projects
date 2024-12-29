import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userProfileReducer from "./userInfoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userProfile: userProfileReducer,
  },
});

export { store };
