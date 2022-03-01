import { RemoveAction } from ".";
import type { Goal } from "./types";
import { ADD, AddAction, REMOVE } from "./types";

export function addAction(goal: Goal): AddAction {
  return {
    type: ADD,
    goal,
  };
}

export function removeAction(id: number): RemoveAction {
  return {
    type: REMOVE,
    id,
  };
}
