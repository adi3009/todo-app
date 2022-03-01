import type { Todo } from "./todos/types";
import { nextId } from "./util";
import { addAction, removeAction, toggleAction } from "./todos/actions";
import { store } from "./app";

store.subscribe(() => {
  let mayBeTodoList = document.getElementById("todo-list");
  if (!mayBeTodoList) {
    return;
  }

  mayBeTodoList.innerHTML = "";
  store.getState().todos.forEach((todo: Todo) => {
    appendTodo(mayBeTodoList as HTMLElement, todo);
  });
});

function addTodo(name: string): void {
  let todo = {
    id: nextId(),
    name,
    complete: false,
  };

  store.dispatch(addAction(todo));
}

function removeTodo(id: number): void {
  store.dispatch(removeAction(id));
}

function toggleTodo(id: number): void {
  store.dispatch(toggleAction(id));
}

document.getElementById("add-todo-button")?.addEventListener("click", () => {
  let todoInput: HTMLInputElement = document.getElementById(
    "todo-text"
  ) as HTMLInputElement;
  const text = todoInput?.value?.trim();
  if (!text) {
    return;
  }

  addTodo(text);
  todoInput.value = "";
});

function appendTodo(list: HTMLElement, todo: Todo) {
  let mayBeTodoId = todo.id;
  if (!mayBeTodoId) {
    return;
  }

  let todoId = mayBeTodoId;

  let item = document.createElement("li");
  item.dataset.todoId = todo.id?.toString();
  item.dataset.testid = `todo-item-${todoId}`;
  item.classList.add("py-5", "border-b-2", "flex", "gap-x-5");

  let itemText = document.createElement("label");
  itemText.textContent = todo.name;
  itemText.setAttribute("for", `status-${todoId}`);
  itemText.classList.add("mr-4");
  itemText.classList.add("flex-1");
  todo.complete &&
    itemText.classList.add("complete", "line-through", "text-slate-400");

  let itemStatus = document.createElement("input") as HTMLInputElement;
  itemStatus.id = `status-${todoId}`;
  itemStatus.type = "checkbox";
  itemStatus.checked = todo.complete;
  itemStatus.classList.add("ml-2");
  itemStatus.addEventListener("change", () => toggleTodo(todoId));

  let removeItemButton = document.createElement("button") as HTMLButtonElement;
  removeItemButton.textContent = "Remove";
  removeItemButton.classList.add(
    "border-2",
    "border-red-700",
    "bg-red-600",
    "hover:bg-red-500",
    "text-slate-50",
    "border-solid",
    "px-1.5",
    "py-1.5"
  );
  removeItemButton.dataset.todoId = todo.id?.toString();
  removeItemButton.addEventListener("click", () => removeTodo(todoId));

  item.appendChild(itemStatus);
  item.appendChild(itemText);
  item.appendChild(removeItemButton);

  list.appendChild(item);
}
