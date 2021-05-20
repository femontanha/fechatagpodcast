import { GrYoutube, GrTwitter, GrInstagram } from 'react-icons/gr'

import styles from './social.module.css'

function Social() {
  return (
    <nav className={styles.social}>
      <a
        href="https://www.youtube.com/channel/UCxuE83M-sIK6XVzf17J_v7A"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <GrYoutube />
      </a>
      <a
        href="https://twitter.com/fechatagpodcast"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <GrTwitter />
      </a>
      <a
        href="https://www.instagram.com/fechatagpodcast/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <GrInstagram />
      </a>
    </nav>
  );
}

export default Social
