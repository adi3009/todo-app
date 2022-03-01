import { faker } from "@faker-js/faker";

import {
  todos as todosReducer,
  addAction,
  removeAction,
  toggleAction,
} from "../../todos";
import type { Todo } from "../../todos";

function generateTodo(): Todo {
  return {
    id: faker.datatype.number(1),
    name: faker.lorem.sentence(),
    complete: faker.datatype.boolean(),
  };
}

describe("todos reducer", () => {
  let state: Array<Todo>;

  beforeEach(() => {
    state = [generateTodo()];
  });

  test("should return same state on invalid action", () => {
    let newState = todosReducer(state, { type: "Invalid action" });
    expect(newState.length).toEqual(1);
    expect(newState).toEqual(state);
  });

  test("must add a new todo", () => {
    let todo: Todo = generateTodo();
    let newState = todosReducer(state, addAction(todo));
    expect(newState.length).toEqual(2);
    expect(newState).toContain(todo);
    expect(newState).not.toBe(state);
  });

  test("must remove a todo", () => {
    let newState = todosReducer(state, removeAction(state[0].id!!));
    expect(newState.length).toEqual(0);
    expect(newState).not.toBe(state);
  });

  test("must toggle a todo", () => {
    let newState = todosReducer(state, toggleAction(state[0].id!!));
    let todo = newState[0];
    expect(todo.complete).toEqual(!state[0].complete);
    expect(todo).not.toBe(state[0]);
  });
});
