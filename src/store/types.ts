export type Listener = () => any;

export type Unsubscribe = () => void;

export interface Action {
  type: string;
}

export type State = any;

export type Reducer = (state: State, action: Action) => State;

export interface Store {
  getState: () => State;
  subscribe: (listener: Listener) => Unsubscribe;
  dispatch: (action: Action) => void;
}
