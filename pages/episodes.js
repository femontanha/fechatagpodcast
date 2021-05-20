import Parser from 'rss-parser'
import Head from 'next/head'

import Block from '../components/block'
import Episode from '../components/episode'
import Social from '../components/social'

const Episodes = ({ episodes }) => (
  <>
     <Head>
        <title>Episódios - FECHATAG Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block
        title="Todos os episódios"
        description={`Total de ${episodes.length} episódios`}
        inverted
      />
      <div className="container">
        {episodes.map(episode => (
          <Episode
            key={episode.guid}
            date={new Date(episode.pubDate).toLocaleDateString('pt-br')}
            title={episode.title}
            href={`/episodes/${episode.itunes.episode}`}
          />
        ))}
      </div>
      <Block
        title="redes sociais"
        description="acesse as nossas redes sociais"
        inverted
      >
        <Social />
      </Block>
  </>
)

export async function getStaticProps() {
  const parser = new Parser()
  const feed = await parser.parseURL('https://anchor.fm/s/51734b40/podcast/rss')
  return {
    props: {
      episodes: feed.items,
    },
  }
}

export default Episodes
