import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <img className={styles.logo} src="logo.png" alt="fechatag logo" />
        <nav className={styles.nav}>
          <a href="mailto:fechatagpodcast@gmail.com" className={styles.link}>Quero Apoiar</a>
        </nav>
      </div>
    </header>
  );
}

export default Header
