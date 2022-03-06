import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeAction, toggleAction } from "../actions";
import type { Todo } from "../types";

type ItemProps = {
  id: number;
};

export function ItemComponent(props: ItemProps) {
  const id = props.id;

  const todo = useAppSelector((state) =>
    state.todos.find((item) => item.id === id)
  ) as Todo;

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
      {console.log(`Item ${todo.name} - Render`)}
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

export const TodoItem = React.memo(ItemComponent);
