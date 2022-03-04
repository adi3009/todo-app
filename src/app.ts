import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { goals } from "./goals";
import { todos } from "./todos";

let appReducer = combineReducers({
  todos,
  goals,
});

export const store = createStore(appReducer, composeWithDevTools());
