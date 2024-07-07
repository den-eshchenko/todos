import { useCallback, useMemo, useState } from "react"
import { NewTodoItemInput } from "./components"
import { TodosFooterActions } from "./TodosFooterActions"
import { FilterType, TodoItemType } from "./types"
import { TodoItems } from "./TodoItems"
import { filterTodos } from "./utils/filterTodos"
import { clearCompletedTodos } from "./utils/clearCompletedTodos"
import { setCheckTodoItem } from "./utils/setCheckTodoItem"
import { addNewTodo } from "./utils/addNewTodo"
import styles from "./styles/Todos.module.css"

export const Todos = () => {
  const [filterType, setFilterType] = useState<FilterType>("All")
  const [todos, setTodos] = useState<TodoItemType[]>([])

  const handleAddTodo = (value: string) => {
    setTodos(addNewTodo(value))
  }

  const handleClickTodoItem = useCallback(
    (checked: boolean, index: number) => {
      setTodos(setCheckTodoItem(checked, index))
    },
    [setTodos],
  )

  const handleChangeFilter = (type: FilterType) => {
    setFilterType(type)
  }

  const handleClearCompleted = () => {
    setTodos(clearCompletedTodos)
  }

  const { itemsLeftCount, filteredTodos } = useMemo(
    () => filterTodos({ todos, filterType }),
    [todos, filterType],
  )

  return (
    <div className={styles.container}>
      <div className={styles.title}>todos</div>
      <div className={styles.todos}>
        <NewTodoItemInput onAddTodo={handleAddTodo} />
        <TodoItems
          items={filteredTodos}
          onClickTodoItem={handleClickTodoItem}
        />
        <TodosFooterActions
          itemsLeftCount={itemsLeftCount}
          activeFilterType={filterType}
          handleChangeFilter={handleChangeFilter}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  )
}
