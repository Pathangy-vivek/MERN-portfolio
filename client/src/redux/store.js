import rootSlice from "./rootSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  root: rootSlice,
});

const stroe = configureStore({
  reducer,
});

export default stroe;
