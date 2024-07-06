import uniqueId from "lodash/uniqueId"
import { useCallback, useMemo, useState } from "react"
import { NewTodoItemInput } from "./components"
import { TodosFooterActions } from "./TodosFooterActions"
import { FilterType, TodoItemType } from "./types"
import { TodoItems } from "./TodoItems"
import { cloneDeep } from "lodash"
import styles from "./styles/Todos.module.css"
import { filterTodos } from "./utils/filterTodos"

export const Todos = () => {
  const [filterType, setFilterType] = useState<FilterType>("All")
  const [todos, setTodos] = useState<TodoItemType[]>([])

  const handleAddTodo = (value: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: uniqueId(), checked: false, text: value },
    ])
  }

  const handleClickTodoItem = useCallback(
    (checked: boolean, index: number) => {
      setTodos(prevTodos => {
        const clonedPrevTodos = cloneDeep(prevTodos)
        clonedPrevTodos[index].checked = checked

        return clonedPrevTodos
      })
    },
    [setTodos],
  )

  const handleChangeFilter = (type: FilterType) => {
    setFilterType(type)
  }

  const handleClearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(({ checked }) => !checked))
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
