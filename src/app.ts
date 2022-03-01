import { goals } from "./goals";
import { createStore, Action, State } from "./store";
import { todos } from "./todos";

function appReducer(state: State = {}, action: Action): State {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

export const store = createStore(appReducer);
