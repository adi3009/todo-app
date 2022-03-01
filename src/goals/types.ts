import type { Action } from "redux";

interface Goal {
  id: number;
  name: string;
}

type GoalAction = Action<string>;

interface AddAction extends GoalAction {
  goal: Goal;
}

interface RemoveAction extends GoalAction {
  id: number;
}

type Actions = GoalAction | AddAction | RemoveAction;

export const ADD = "ADD_GOAL";

export const REMOVE = "REMOVE_GOAL";

export { Actions, AddAction, RemoveAction, Goal };
