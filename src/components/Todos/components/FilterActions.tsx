import { FilterType } from "../types"
import { FilterButton } from "./FilterButton"
import styles from "./styles/FilterActions.module.css"

interface Props {
  activeFilterType: FilterType
  handleChangeFilter: (type: FilterType) => void
}

export const FilterActions = ({
  activeFilterType,
  handleChangeFilter,
}: Props) => {
  return (
    <div className={styles.container}>
      <FilterButton
        activeFilterType={activeFilterType}
        value="All"
        onChangeFilter={handleChangeFilter}
      />
      <FilterButton
        activeFilterType={activeFilterType}
        value="Active"
        onChangeFilter={handleChangeFilter}
      />
      <FilterButton
        activeFilterType={activeFilterType}
        value="Completed"
        onChangeFilter={handleChangeFilter}
      />
    </div>
  )
}
