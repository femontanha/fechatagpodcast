import Link from 'next/link'
import { HiMenuAlt3 } from "react-icons/hi";

import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link href="/">
          <a className={styles.logoLink}>
            <h1 className={styles.logoText}>fechatAg</h1>
          </a>
        </Link>
        <nav className={styles.nav}>
          <HiMenuAlt3 />
        </nav>
      </div>
    </header>
  );
}

export default Header
