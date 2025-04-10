import styles from './MyComponent.module.scss';

const MyComponent = () => {
  return (
    <div>
      <div className={styles.special}>
        Text from My Component 1
        <div className={styles.test}> My super span!</div>
        <div id={styles.myId}> My super ID div!</div>
      </div>
    </div>
  )
}

export default MyComponent