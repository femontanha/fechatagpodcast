import Parser from 'rss-parser'
import Head from 'next/head'
import Link from 'next/link'

import Block from '../components/block'
import Platforms from '../components/platforms'
import Social from '../components/social'

import styles from '../styles/home.module.css'

export default function Home({ lastEpisode }) {
  return (
    <>
      <Head>
        <title>FECHATAG Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <p className={styles.intro}>
          Um podcast onde o Montanha bate um papo com diversas pessoas de tecnologia. Os episódios são publicados todas às <span className={styles.period}>terças e quintas</span> nos seus agregadores favoritos e também agora em vídeo no Youtube.
        </p>
      </section>
      <Block
        title="último episódio"
        inverted
      >
        <Link href={`/episodes/${lastEpisode.itunes.episode}`}>
          <a className={styles.lastEpisodeLink}>
            {lastEpisode.title}
          </a>
        </Link>
      </Block>
      <Block
        title="plataformas de podcast"
        description="Estamos no seu agregador de podcast favorito"
      >
        <Platforms />
      </Block>
      <Block
        title="redes sociais"
        description="acesse as nossas redes sociais"
        inverted
      >
        <Social />
      </Block>
    </>
  )
}

export async function getStaticProps() {
  const parser = new Parser()
  const feed = await parser.parseURL('https://anchor.fm/s/51734b40/podcast/rss')
  console.log()
  return {
    props: {
      lastEpisode: feed.items[0],
    },
  }
}
