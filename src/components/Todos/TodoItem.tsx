import { memo } from "react"
import { CustomCheckbox } from "../../shared"
import styles from "./styles/TodoItem.module.css"

interface Props {
  index: number
  id: string
  text: string
  checked: boolean
  onClickTodoItem: (checked: boolean, index: number) => void
}

export const TodoItem = memo(
  ({ checked, id, text, index, onClickTodoItem }: Props) => {
    const handleClickItem = (checked: boolean) => {
      onClickTodoItem(checked, index)
    }

    return (
      <div className={styles.container}>
        <CustomCheckbox
          id={id}
          checked={checked}
          label={text}
          onChange={handleClickItem}
        />
      </div>
    )
  },
)

TodoItem.displayName = "TodoItem"
