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
          <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/13565104/13565104-1618199600138-3f6653a57ef52.jpg" alt="Keit Oliveira" />
          <AudioPlayer
            src="https://anchor.fm/s/51734b40/podcast/play/31232913/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-3-12%2F1cc4d1e3-3e3d-9645-a2cd-31c655b81a1c.mp3"
            showFilledVolume
            customAdditionalControls={[]}
          />
        </div>
      </div>
      <Platforms />
    </div>
  )
}
