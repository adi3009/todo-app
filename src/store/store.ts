import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { goals } from "../goals";
import { todos } from "../todos";

let appReducer = combineReducers({
  todos,
  goals,
});

export const store = createStore(appReducer, composeWithDevTools());

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
