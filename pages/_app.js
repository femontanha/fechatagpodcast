import { useState } from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import NavMobile from '../components/navMobile'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isOpenNavMobile, setOpenNavMobile] = useState(false);

  const onHeaderMobileClick = () => setOpenNavMobile(true);
  const onNavMobileClick = () => setOpenNavMobile(false);

  return (
    <>
      <NavMobile isOpen={isOpenNavMobile} onClick={onNavMobileClick} />
      <main className={`${isOpenNavMobile ? 'hidden' : ''}`}>
        <Header onClick={onHeaderMobileClick} />
        <Component {...pageProps} />
      </main>
      <div className={`footer-space ${isOpenNavMobile ? 'hidden' : ''}`}>
        <Footer />
      </div>
    </>
  );
}

export default MyApp
