import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  post: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>