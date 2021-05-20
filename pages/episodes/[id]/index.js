import Parser from 'rss-parser'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import Block from '../../../components/block'
import Social from '../../../components/social'

import styles from './pageEpisode.module.css';

const parser = new Parser()

const PageEpisode = ({ title, content, pubDate, enclosure }) => {
  console.log(enclosure.url);
  return (
    <>
      <section className="container">
        <time className={styles.time}>{new Date(pubDate).toLocaleDateString('pt-br')}</time>
        <h2 className={styles.title}>{title}</h2>
        <AudioPlayer
          src={enclosure.url}
          showFilledVolume
          customAdditionalControls={[]}
        />
        <div dangerouslySetInnerHTML={{
          __html: content
        }}></div>
      </section>
      <Block
        title="redes sociais"
        description="acesse as nossas redes sociais"
        inverted
      >
        <Social />
      </Block>
    </>
  );
}

export async function getStaticPaths() {
  const feed = await parser.parseURL('https://anchor.fm/s/51734b40/podcast/rss')
  return {
    paths: feed.items.map(episode => ({
      params: {
        id: episode.itunes.episode,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const feed = await parser.parseURL('https://anchor.fm/s/51734b40/podcast/rss')
  const { params } = context;
  return {
    props: feed.items.find(episode => episode.itunes.episode === params.id),
  }
}

export default PageEpisode
