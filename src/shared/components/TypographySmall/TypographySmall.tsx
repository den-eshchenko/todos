import styles from "./TypographySmall.module.css"

interface Props {
  text: string
}

export const TypographySmall = ({ text }: Props) => {
  return <span className={styles.typographySmall}>{text}</span>
}
