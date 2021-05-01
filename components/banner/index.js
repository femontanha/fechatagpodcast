import styles from './banner.module.css'

function Banner({ image, title, description, children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image} />
        <div className={styles.information}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.actions}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
