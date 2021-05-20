import Link from 'next/link'
import { HiX } from 'react-icons/hi'

import { NAV_DATA } from '../../data/nav'

import styles from './navMobile.module.css'

function NavMobile({ isOpen, onClick }) {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
      <button className={styles.button} onClick={onClick} aria-label="Fechar menu principal">
        <HiX />
      </button>
      <div className={styles.content}>
        {NAV_DATA.map(item => (
          <Link href={item.href} key={item.id}>
            <a className={styles.link} onClick={onClick}>
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavMobile
