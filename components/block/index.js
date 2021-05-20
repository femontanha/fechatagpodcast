import styles from './block.module.css'

const Block = ({ title, description, inverted, children }) => (
  <div className={`${styles.block} ${inverted && styles.inverted}`}>
    <h2 className={styles.title}>{title}</h2>
    {description && (
      <p className={styles.description}>
        {description}
      </p>
    )}
    {children && (
      <div className={styles.content}>
        {children}
      </div>
    )}
  </div>
)

export default Block
