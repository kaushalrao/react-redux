import counterReducer from "./reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: counterReducer });
export default store;
