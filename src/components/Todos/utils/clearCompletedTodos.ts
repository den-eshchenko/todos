import type { TodoItemType } from "../types"

export const clearCompletedTodos = (todos: TodoItemType[]) =>
  todos.filter(({ checked }) => !checked)
