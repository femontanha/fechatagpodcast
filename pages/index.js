import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import Video from '../components/video'
import Platforms from '../components/platforms'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FECHATAG Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Video />
      <div className={styles.showInformation}>
        <p className={styles.weekly}>
          Novos episódios toda <span className={styles.monday}>segunda-feira</span>
        </p>
      </div>
      <div className={styles.host}>
        <h2 className={styles.hostTitle}>último episódio</h2>
        <div className={styles.player}>
          <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/13565104/13565104-1619832917078-f3892022815a6.jpg" alt="Pothix" />
          <AudioPlayer
            src="https://anchor.fm/s/51734b40/podcast/play/32593866/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-4-1%2F47b8ef2a-d101-c5bc-46f3-e4b2706ae561.mp3"
            showFilledVolume
            customAdditionalControls={[]}
          />
        </div>
      </div>
      <Platforms />
    </div>
  )
}
