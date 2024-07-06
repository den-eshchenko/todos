import { TypographySmall } from "../../../shared"

interface Props {
  count: number
}

export const ItemsLeftCount = ({ count }: Props) => (
  <div>
    <TypographySmall text={`${count} items left`} />
  </div>
)
