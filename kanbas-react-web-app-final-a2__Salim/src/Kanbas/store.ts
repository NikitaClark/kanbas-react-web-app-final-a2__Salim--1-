import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"; // Import the assignments reducer

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer, // Add assignments reducer here
  },
});

export default store;
