import clsx from "clsx"
import styles from "./CustomCheckbox.module.css"

interface Props {
  id: string
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
}

export const CustomCheckbox = ({ id, checked, label, onChange }: Props) => {
  const uniqueId = `customCheckbox${id}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  return (
    <div className={styles.customCheckboxContainer}>
      <input
        type="checkbox"
        className={styles.customCheckbox}
        id={uniqueId}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={uniqueId}
        className={clsx(styles.labelCustomCheckbox, {
          [styles.labelChecked]: checked,
        })}
      >
        {label}
      </label>
    </div>
  )
}
