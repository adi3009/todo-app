import type { Action } from "../store";

export interface Todo {
  id?: number;
  name: string;
  complete: boolean;
}

export interface AddAction extends Action {
  todo: Todo;
}

export interface RemoveAction extends Action {
  id: number;
}

export interface ToggleAction extends Action {
  id: number;
}

export type Actions = Action | AddAction | RemoveAction | ToggleAction;

export const ADD = "ADD_TODO";

export const REMOVE = "REMOVE_TODO";

export const TOGGLE = "TOGGLE_TODO";
