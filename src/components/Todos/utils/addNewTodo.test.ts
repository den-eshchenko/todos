import { TodoItemType } from "../types"
import { addNewTodo } from "./addNewTodo"

const initialTodos = [] as TodoItemType[]

test("Add new todo on cleared initial todos", () => {
  const firstTodos = addNewTodo("1")(initialTodos)

  expect(firstTodos).toHaveLength(1)
  expect(firstTodos[0]).toHaveProperty(["checked"], false)

  const secondTodos = addNewTodo("2")(firstTodos)

  expect(secondTodos).toHaveLength(2)
  expect(firstTodos[0]).toHaveProperty(["checked"], false)
})
