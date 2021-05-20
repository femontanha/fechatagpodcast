import Link from 'next/link'
import Image from 'next/image'
import { HiMenu } from 'react-icons/hi'

import { NAV_DATA } from '../../data/nav'

import styles from './header.module.css'

function Header({ onClick }) {
  return (
    <header className="container">
      <nav className={styles.nav}>
        <h1>
          <Link href="/">
            <a>
              <Image
                className={styles.image}
                src="/logo_fechatag.png"
                alt="FECHATAG Podcast"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </h1>
        <div className={styles.group}>
          {NAV_DATA.map(item => (
            <Link href={item.href} key={item.id}>
              <a className={styles.link}>
                {item.title}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.mobileIcon}>
          <button className={styles.button} onClick={onClick} aria-label="Abrir menu principal">
            <HiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header
