import { configureStore } from "@reduxjs/toolkit";
import users from "./modules/users";

export default configureStore({
  reducer: {
    users,
  },
});
