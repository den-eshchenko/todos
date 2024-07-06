import { filterTodos } from "./filterTodos"

const todosAllNotChecked = [
  { id: "1", text: "1", checked: false },
  { id: "2", text: "2", checked: false },
  { id: "3", text: "3", checked: false },
]

const todosAllChecked = [
  { id: "1", text: "1", checked: true },
  { id: "2", text: "2", checked: true },
  { id: "3", text: "3", checked: true },
]

test("Correct filter todos by filterType='All'", () => {
  const { itemsLeftCount, filteredTodos } = filterTodos({
    todos: todosAllNotChecked,
    filterType: "All",
  })

  expect(itemsLeftCount).toBe(3)
  expect(filteredTodos).toHaveLength(3)
  expect(filteredTodos[0]).toHaveProperty(["checked"], false)
  expect(filteredTodos).toEqual(todosAllNotChecked)
})

test("Correct filter todos by filterType='Active'", () => {
  const { itemsLeftCount, filteredTodos } = filterTodos({
    todos: todosAllNotChecked,
    filterType: "Active",
  })

  expect(itemsLeftCount).toBe(3)
  expect(filteredTodos).toHaveLength(3)
  expect(filteredTodos[2]).toHaveProperty(["checked"], false)
  expect(filteredTodos).toEqual(todosAllNotChecked)
})

test("Correct filter todos by filterType='Completed'", () => {
  const { itemsLeftCount, filteredTodos } = filterTodos({
    todos: todosAllChecked,
    filterType: "Completed",
  })

  expect(itemsLeftCount).toBe(0)
  expect(filteredTodos).toHaveLength(3)
  expect(filteredTodos[1]).toHaveProperty(["checked"], true)
  expect(filteredTodos).toEqual(todosAllChecked)
})
