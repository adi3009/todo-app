import type { Action } from "redux";

export interface Todo {
  id?: number;
  name: string;
  complete: boolean;
}

type TodoAction = Action<string>;

export interface AddAction extends TodoAction {
  todo: Todo;
}

export interface RemoveAction extends TodoAction {
  id: number;
}

export interface ToggleAction extends TodoAction {
  id: number;
}

export type Actions = TodoAction | AddAction | RemoveAction | ToggleAction;

export const ADD = "ADD_TODO";

export const REMOVE = "REMOVE_TODO";

export const TOGGLE = "TOGGLE_TODO";
