import { Action } from "../store";

interface Goal {
  id: number;
  name: string;
}

interface AddAction extends Action {
  goal: Goal;
}

interface RemoveAction extends Action {
  id: number;
}

type Actions = Action | AddAction | RemoveAction;

export const ADD = "ADD_GOAL";

export const REMOVE = "REMOVE_GOAL";

export { Actions, AddAction, RemoveAction, Goal };
