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
          Novos episódios toda <span className={styles.monday}>segunda</span> e <span className={styles.monday}>quinta</span>
        </p>
      </div>
      <div className={styles.host}>
        <h2 className={styles.hostTitle}>último episódio em vídeo</h2>
        <div className={styles.hostVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/J3PBB0ujvHY" title="Assistir episódio: Tecnologia em Floripa, Cerveja e Trybe com Elton Minetto" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <h2 className={styles.hostTitle}>último episódio em áudio</h2>
        <div className={styles.player}>
          <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/13565104/13565104-1621206341163-1fe24af7e6899.jpg" alt="Elton Minetto" />
          <AudioPlayer
            src="https://anchor.fm/s/51734b40/podcast/play/33628777/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-4-16%2F40296e17-8693-467c-d077-a4c2943bb189.mp3"
            showFilledVolume
            customAdditionalControls={[]}
          />
        </div>
      </div>
      <Platforms />
    </div>
  )
}
