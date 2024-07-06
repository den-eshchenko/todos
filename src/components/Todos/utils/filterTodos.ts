import { FilterType, TodoItemType } from "../types"

interface Params {
  filterType: FilterType
  todos: TodoItemType[]
}

export const filterTodos = ({ todos, filterType }: Params) => {
  return todos.reduce<{
    itemsLeftCount: number
    filteredTodos: TodoItemType[]
  }>(
    (acc, item) => {
      if (!item.checked) {
        acc.itemsLeftCount++
      }

      if (
        (filterType === "Active" && !item.checked) ||
        (filterType === "Completed" && item.checked) ||
        filterType === "All"
      ) {
        acc.filteredTodos.push(item)

        return acc
      }

      return acc
    },
    { itemsLeftCount: 0, filteredTodos: [] },
  )
}
