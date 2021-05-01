import Head from 'next/head'

import Block from '../components/block'
import Banner from '../components/banner'
import Platforms from '../components/platforms'

export default function Home() {
  return (
    <>
      <Head>
        <title>FECHATAG Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        image={"https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/13565104/13565104-1618841220859-bd2a7f95f0839.jpg"}
        title="fechatAg"
        description="Olá eu sou o Montanha! O projeto FECHATAG é um podcast de bate papo com pessoas de tecnologia."
      />
      <Block
        title="último episódio"
        description="Escute o último episódio pelo Apple Podcast Player"
      >
        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="175" src="https://embed.podcasts.apple.com/br/podcast/vivendo-de-stream-humorista-e-magic-com-pokemaobr/id1559548772?i=1000517690647"></iframe>
      </Block>
      <Block
        title="plataformas de podcast"
        description="Estamos no seu agregador de podcast favorito"
        inverted
      >
        <Platforms />
      </Block>
    </>
  )
}
