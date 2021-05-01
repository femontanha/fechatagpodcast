import Link from 'next/link'

import styles from './episodes-list.module.css'

const EpisodesList = () => (
  <div className={styles.row}>
    <div className={styles.column}>
      <Link href="/episodes/afonso-franca">
        <a className={styles.episode} title="Afonço França episódio 2">
          <img className={styles.cover} src="episodes/02.png" alt="Afonço França episódio 2" />
          <div className={styles.information}>
            Afonço França - #02
          </div>
        </a>
      </Link>
    </div>
    <div className={styles.column}>
      <Link href="/episodes/willian-martins">
        <a className={styles.episode}>
          <img className={styles.cover} src="episodes/01.png" alt="Willian Martins episódio 1" />
          <div className={styles.information}>
            Willian Martins - #01
          </div>
        </a>
      </Link>
    </div>
  </div>
)

export default EpisodesList
