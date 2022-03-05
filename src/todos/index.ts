import todos from "./reducer";
import type { Todo } from "./types";
import { addAction, removeAction, toggleAction } from "./actions";
import { TodoList } from "./components/TodoList";

export { todos, Todo, addAction, removeAction, toggleAction, TodoList };
