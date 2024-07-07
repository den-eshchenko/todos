import { cloneDeep } from "lodash"
import { TodoItemType } from "../types"

export const setCheckTodoItem =
  (checked: boolean, index: number) => (todos: TodoItemType[]) => {
    const clonedPrevTodos = cloneDeep(todos)
    clonedPrevTodos[index].checked = checked

    return clonedPrevTodos
  }
