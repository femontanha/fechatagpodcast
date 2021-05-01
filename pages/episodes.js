import Head from 'next/head'

import Block from '../components/block'
import EpisodesList from '../components/episodes-list'
import Platforms from '../components/platforms'

const Episodes = () => (
  <>
     <Head>
        <title>Episódios - FECHATAG Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block
        title="Todos os episódios"
        description="Lista de todos os episódios do podcast"
        inverted
      >
        <EpisodesList />
      </Block>
      <Block
        title="plataformas de podcast"
        description="Estamos no seu agregador de podcast favorito"
      >
        <Platforms />
      </Block>
  </>
)

export default Episodes
