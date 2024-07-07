import { uniqueId } from "lodash"
import type { TodoItemType } from "../types"

export const addNewTodo = (text: string) => (todos: TodoItemType[]) => [
  ...todos,
  { id: uniqueId(), checked: false, text },
]
