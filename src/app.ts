import { combineReducers, createStore } from "redux";
import { goals } from "./goals";
import { todos } from "./todos";

let appReducer = combineReducers({
  todos,
  goals,
});

export const store = createStore(appReducer);
