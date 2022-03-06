import React from "react";
import { useAppDispatch } from "../../store";
import { removeAction, toggleAction } from "../actions";
import type { Todo } from "../types";

type ItemProps = {
  todo: Todo;
};

export function TodoItem(props: ItemProps) {
  const todo = props.todo;

  const id = todo.id as number;

  let labelClass = "mr-4 flex-1";

  if (todo.complete === true) {
    labelClass += " complete line-through text-slate-400";
  }

  const dispatch = useAppDispatch();

  return (
    <li
      data-todoid={id}
      data-testid={`todo-item-${id}`}
      className="py-5 border-b-2 flex gap-x-5"
    >
      <label htmlFor={`status-${id}`} className={labelClass}>
        {todo.name}
      </label>
      <input
        type="checkbox"
        id={`status-${id}`}
        checked={todo.complete}
        className="ml-2"
        onChange={() => dispatch(toggleAction(id))}
      ></input>
      <button
        type="button"
        data-todoid={id}
        className="border-2 border-red-700 bg-red-600 hover:bg-red-500 text-slate-50 border-solid px-1.5 py-1.5"
        onClick={() => dispatch(removeAction(id))}
      >
        Remove
      </button>
    </li>
  );
}
