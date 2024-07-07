import clsx from "clsx"
import { TodoItem } from "./TodoItem"
import type { TodoItemType } from "./types"
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from "react-virtualized"
import type { ListRowProps } from "react-virtualized"
import { useCallback, useRef } from "react"
import styles from "./styles/TodoItems.module.css"

interface Props {
  items: TodoItemType[]
  onClickTodoItem: (checked: boolean, index: number) => void
}

export const TodoItems = ({ items, onClickTodoItem }: Props) => {
  const hasItems = Boolean(items.length)
  const cache = useRef(
    new CellMeasurerCache({
      defaultHeight: 70,
    }),
  )

  const rowRenderer = useCallback(
    ({ key, index, parent, style }: ListRowProps) => (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <TodoItem
            {...items[index]}
            index={index}
            onClickTodoItem={onClickTodoItem}
          />
        </div>
      </CellMeasurer>
    ),
    [items, onClickTodoItem],
  )

  return (
    <div
      className={clsx(styles.container, {
        [styles.noDataContainer]: !hasItems,
      })}
    >
      {hasItems ? (
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={items.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      ) : (
        <div className={styles.noDataText}>
          <span>No Data</span>
        </div>
      )}
    </div>
  )
}
