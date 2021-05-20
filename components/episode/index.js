import Link from 'next/link'

import styles from './episode.module.css'

function Episode({ date, title, href }) {
  return (
    <section className={styles.episode}>
      <time className={styles.time}>
        {date}
      </time>
      <div className={styles.info}>
        <h2 className={styles.title}>
          <Link href={href}>
            <a className={styles.link}>
              {title}
            </a>
          </Link>
        </h2>
        <Link href={href}>
          <a className={styles.button}>
            Acessar episódio
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Episode
