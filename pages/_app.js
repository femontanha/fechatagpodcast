import '../styles/globals.css'
import styles from './app.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
