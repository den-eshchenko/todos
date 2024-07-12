import { TypographySmall } from "../../../shared"

interface Props {
  count: number
}

export const ItemsLeftCount = ({ count }: Props) => (
  <div data-testid="count_todos">
    <TypographySmall text={`${count} items left`} />
  </div>
)
