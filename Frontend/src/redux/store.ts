import { configureStore } from "@reduxjs/toolkit";

import customersReducer from "./reducers/customersReducer";

const store = configureStore({
  reducer: {
    customersReducer,
  },
});


export type GlobalState = ReturnType<typeof store.getState>;
export type GlobalDispatch = typeof store.dispatch;

export default store;
