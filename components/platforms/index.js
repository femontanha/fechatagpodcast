import {
  SiSpotify,
  SiAnchor,
  SiApplepodcasts,
  SiGooglepodcasts,
  SiPocketcasts,
  SiDeezer,
  SiAmazon,
  SiRss,

} from 'react-icons/si'

import styles from './platforms.module.css'

const Platforms = () => (
  <div className={styles.podcastPlatforms}>
    <div className={styles.platforms}>
      <a href="https://open.spotify.com/show/4HvH2R8om5mD9KlgfBNnsH" target="_blank" rel="noopener noreferrer">
        <SiSpotify />
      </a>
      <a href="https://anchor.fm/fechatagpodcast" target="_blank" rel="noopener noreferrer">
        <SiAnchor />
      </a>
      <a href="https://podcasts.apple.com/br/podcast/fechatag/id1559548772" target="_blank" rel="noopener noreferrer">
        <SiApplepodcasts />
      </a>
      <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81MTczNGI0MC9wb2RjYXN0L3Jzcw" target="_blank" rel="noopener noreferrer">
        <SiGooglepodcasts />
      </a>
      <a href="https://pca.st/tgwsz0vn" target="_blank" rel="noopener noreferrer">
        <SiPocketcasts />
      </a>
      <a href="https://www.deezer.com/us/show/2444702" target="_blank" rel="noopener noreferrer">
        <SiDeezer />
      </a>
      <a href="https://music.amazon.com/podcasts/b46a093d-4d05-480c-bc9c-2b23f100265d/FECHATAG" target="_blank" rel="noopener noreferrer">
        <SiAmazon />
      </a>
      <a href="https://anchor.fm/s/51734b40/podcast/rss" target="_blank" rel="noopener noreferrer">
        <SiRss />
      </a>
    </div>
  </div>
);

export default Platforms
