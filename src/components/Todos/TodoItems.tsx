import clsx from "clsx"
import { TodoItem } from "./TodoItem"
import styles from "./styles/TodoItems.module.css"
import { TodoItemType } from "./types"

interface Props {
  items: TodoItemType[]
  onClickTodoItem: (checked: boolean, index: number) => void
}

export const TodoItems = ({ items, onClickTodoItem }: Props) => {
  const hasItems = Boolean(items.length)

  return (
    <div
      className={clsx(styles.container, {
        [styles.noDataContainer]: !hasItems,
      })}
    >
      {hasItems ? (
        items.map(({ id, checked, text }, index) => (
          <TodoItem
            key={id}
            id={id}
            index={index}
            checked={checked}
            text={text}
            onClickTodoItem={onClickTodoItem}
          />
        ))
      ) : (
        <div className={styles.noDataText}>
          <span>No Data</span>
        </div>
      )}
    </div>
  )
}
