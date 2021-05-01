import styles from './button.module.css'

const Button = ({ className, children }) => (
  <button className={`${className} ${styles.button}`}>
    {children}
  </button>
)

export default Button
