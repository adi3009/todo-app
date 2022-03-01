import type { Todo, AddAction, RemoveAction, ToggleAction } from "./types";

import { ADD, REMOVE, TOGGLE } from "./types";

export function addAction(todo: Todo): AddAction {
  return {
    type: ADD,
    todo,
  };
}

export function removeAction(id: number): RemoveAction {
  return {
    type: REMOVE,
    id,
  };
}

export function toggleAction(id: number): ToggleAction {
  return {
    type: TOGGLE,
    id,
  };
}
