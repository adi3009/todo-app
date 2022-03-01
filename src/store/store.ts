import type {
  Action,
  Listener,
  Reducer,
  State,
  Store,
  Unsubscribe,
} from "./types";

export default function createStore(reducer: Reducer): Store {
  let state: State;

  let listeners: Array<Listener> = [];

  const getState = () => state;

  const subscribe = (listener: Listener): Unsubscribe => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action: Action): void => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
