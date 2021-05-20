import Parser from 'rss-parser'

import styles from './pageEpisode.module.css';

const parser = new Parser()

const PageEpisode = ({ title, content, pubDate }) => {
  return (
    <section className="container">
      <time className={styles.time}>{new Date(pubDate).toLocaleDateString('pt-br')}</time>
      <h2 className={styles.title}>{title}</h2>
      <div dangerouslySetInnerHTML={{
        __html: content
      }}></div>
    </section>
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
