import Link from 'next/link'

import styles from './404.module.css'

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Página não encontrada</h1>
      <Link href="/">
        <a className={styles.link}>Voltar para a página inicial</a>
      </Link>
    </div>
  )
}
