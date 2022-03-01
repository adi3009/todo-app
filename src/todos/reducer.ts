import type { Todo, Actions } from "./types";
import { ADD, REMOVE, TOGGLE } from "./types";

// Reducer - is a pure function that takes state, an action as arguments and
// returns a new copy of the state based on the action argument
export default function todos(
  state: Array<Todo> = [],
  action: Actions
): Array<Todo> {
  switch (action.type) {
    case ADD:
      if ("todo" in action) {
        return state.concat([action.todo]);
      }

      return state;
    case REMOVE:
      if ("id" in action) return state.filter((todo) => todo.id != action.id);
      return state;
    case TOGGLE:
      if (!("id" in action)) return state;
      return state.map((todo) =>
        todo.id != action.id ? todo : { ...todo, complete: !todo.complete }
      );
    default:
      return state;
  }
}
