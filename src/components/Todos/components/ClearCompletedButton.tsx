import { TypographySmall } from "../../../shared"

interface Props {
  onClearCompleted: () => void
}

export const ClearCompletedButton = ({ onClearCompleted }: Props) => {
  return (
    <div className="pointer" onClick={onClearCompleted}>
      <TypographySmall text="Clear completed" />
    </div>
  )
}
