import styles from './TextComponent.module.css'

const TextComponent = ({children}) => {
  return (
    <div>
      <div className={styles.special}>Text from TEXT Component</div>
      <div>{children}</div>
    </div>
  )
}

export default TextComponent