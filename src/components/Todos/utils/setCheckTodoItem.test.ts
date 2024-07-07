import { setCheckTodoItem } from "./setCheckTodoItem"

const todosOneChecked = [
  { id: "1", text: "1", checked: true },
  { id: "2", text: "2", checked: false },
  { id: "3", text: "3", checked: true },
]

test("Correct clear completed todos'", () => {
  const index = 1

  const firstNewCheckedTodos = setCheckTodoItem(true, index)(todosOneChecked)

  expect(firstNewCheckedTodos).toHaveLength(3)
  expect(firstNewCheckedTodos[index]).toHaveProperty(["checked"], true)

  const secondNewCheckedTodos = setCheckTodoItem(
    false,
    index,
  )(firstNewCheckedTodos)

  expect(secondNewCheckedTodos).toHaveLength(3)
  expect(secondNewCheckedTodos[index]).toHaveProperty(["checked"], false)
})
