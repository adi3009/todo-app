import { goals } from "./goals";
import type { Goal } from "./goals";
import { createStore } from "redux";
import type { Action } from "redux";
import { todos } from "./todos";
import type { Todo } from "./todos";

type State = { todos: Array<Todo>; goals: Array<Goal> };

function appReducer(
  state: State = { todos: [], goals: [] },
  action: Action<string>
): State {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

export const store = createStore(appReducer);
