import clsx from "clsx"
import type { FilterType } from "../types"
import { TypographySmall } from "../../../shared"
import styles from "./styles/FilterButton.module.css"

interface Props {
  activeFilterType: FilterType
  value: FilterType
  onChangeFilter: (type: FilterType) => void
}

export const FilterButton = ({
  activeFilterType,
  value,
  onChangeFilter,
}: Props) => {
  const handleChangeFilterType = () => {
    onChangeFilter(value)
  }

  return (
    <div
      className={clsx(styles.filterItem, {
        [styles.filterItemActive]: activeFilterType === value,
      })}
      onClick={handleChangeFilterType}
    >
      <TypographySmall text={value} />
    </div>
  )
}
