import { CombinedState, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { goals } from "./goals";
import type { Goal } from "./goals";
import { todos } from "./todos";
import type { Todo } from "./todos";

export type AppState = CombinedState<{
  todos: Array<Todo>;
  goals: Array<Goal>;
}>;

let appReducer = combineReducers({
  todos,
  goals,
});

export const store = createStore(appReducer, composeWithDevTools());
