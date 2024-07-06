import { useState } from "react"
import styles from "./styles/NewTodoItemInput.module.css"

const MAX_TEXT_LENGTH = 255

interface Props {
  onAddTodo: (value: string) => void
}

export const NewTodoItemInput = ({ onAddTodo }: Props) => {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    if (newValue.length > MAX_TEXT_LENGTH) return

    setValue(e.target.value)
  }

  const handleAdd = () => {
    if (!value) return

    onAddTodo(value)
    setValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={handleAdd} />
      <input
        value={value}
        className={styles.newTodoItemInput}
        type="text"
        placeholder="What needs to be done?"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
