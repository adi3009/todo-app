import type { Goal, Actions } from "./types";
import { ADD, REMOVE } from "./types";

export default function goals(
  state: Array<Goal> = [],
  action: Actions
): Array<Goal> {
  switch (action.type) {
    case ADD:
      if ("goal" in action) return state.concat([action.goal]);
      return state;
    case REMOVE:
      if ("id" in action) return state.filter((goal) => goal.id !== action.id);
      return state;
    default:
      return state;
  }
}
