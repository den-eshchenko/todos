import { clearCompletedTodos } from "./clearCompletedTodos"

const todosOneChecked = [
  { id: "1", text: "1", checked: true },
  { id: "2", text: "2", checked: false },
  { id: "3", text: "3", checked: true },
]

test("Correct clear completed todos'", () => {
  const clearedTodos = clearCompletedTodos(todosOneChecked)

  expect(clearedTodos).toHaveLength(1)
  expect(clearedTodos[0]).toHaveProperty(["checked"], false)
})
