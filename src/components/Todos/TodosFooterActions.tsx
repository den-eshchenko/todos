import {
  ClearCompletedButton,
  FilterActions,
  ItemsLeftCount,
} from "./components"
import { FilterType } from "./types"
import styles from "./styles/TodosFooterActions.module.css"

interface Props {
  activeFilterType: FilterType
  itemsLeftCount: number
  handleChangeFilter: (type: FilterType) => void
  handleClearCompleted: () => void
}

export const TodosFooterActions = ({
  activeFilterType,
  itemsLeftCount,
  handleChangeFilter,
  handleClearCompleted,
}: Props) => {
  return (
    <div className={styles.container}>
      <ItemsLeftCount count={itemsLeftCount} />
      <FilterActions
        activeFilterType={activeFilterType}
        handleChangeFilter={handleChangeFilter}
      />
      <ClearCompletedButton onClearCompleted={handleClearCompleted} />
    </div>
  )
}
