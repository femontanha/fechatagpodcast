import styles from './video.module.css'

function Video() {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.banner}>
        <h1>fechatAg Podcast</h1>
        <p>É um podcast de bate papo com pessoas de tecnologia</p>
      </div>
      <video className={styles.video} autoPlay muted loop>
        <source src="video.mp4" type="video/mp4" />
        <source src="video.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default Video
