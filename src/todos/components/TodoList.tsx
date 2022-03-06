import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { shallowEqual } from "react-redux";
import { nextId } from "../../util";
import { addAction } from "../actions";
import type { Todo } from "../types";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const dispatch = useAppDispatch();

  const [itemValue, setItemValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setItemValue(e.currentTarget.value);

  function addItem() {
    const todo: Todo = {
      id: nextId(),
      name: itemValue,
      complete: false,
    };

    dispatch(addAction(todo));
    setItemValue("");
  }

  const itemIds = useAppSelector(
    (state) => state.todos.map((item) => item.id as number),
    shallowEqual
  );

  const renderedItems = itemIds.map((id) => <TodoItem key={id} id={id} />);

  return (
    <>
      {console.log("List - Render")}
      <h1 className="text-blue-800 text-2xl font-bold py-3 mb-2">Todos</h1>
      <div className="border-b-2 pb-2 flex gap-x-5 w-4/5">
        <input
          type="text"
          id="todo-text"
          data-testid="todoTextInput"
          name="todo"
          placeholder="New Todo"
          className="border-b-2 border-solid border-blue-800 text-xl focus:outline-none flex-1"
          value={itemValue}
          onChange={handleChange}
        />
        <button
          id="add-todo-button"
          type="button"
          className="border-2 border-blue-800 bg-blue-700 hover:bg-blue-600 text-slate-50 border-solid px-1.5 py-1.5"
          onClick={() => addItem()}
        >
          Add Todo
        </button>
      </div>
      <ul id="todo-list" data-testid="todoList">
        {renderedItems}
      </ul>
    </>
  );
}
