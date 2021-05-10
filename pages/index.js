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
        <h2 className={styles.hostTitle}>último episódio em vídeo</h2>
        <div className={styles.hostVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TmXf4aR1wx0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <h2 className={styles.hostTitle}>último episódio em áudio</h2>
        <div className={styles.player}>
          <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/13565104/13565104-1620617059102-b88ec29a0282a.jpg" alt="Gabriel Froes" />
          <AudioPlayer
            src="https://anchor.fm/s/51734b40/podcast/play/33184550/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-4-10%2F93d1bc6f-6202-eb04-26c2-c54353b3d4b1.mp3"
            showFilledVolume
            customAdditionalControls={[]}
          />
        </div>
      </div>
      <Platforms />
    </div>
  )
}
