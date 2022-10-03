import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duguid Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>Our Story</h1>
        <div className={styles.infoContainer}>
          <p className={styles.info}>Duguid Construction is a 50 year old residential and farming construction business engaging in jobs of all shapes and sizes. Our company has a particular focus on building client relationships by providing high quality work. The different types of jobs we provide include:</p>
          <menu className={styles.jobInfo}>
            <li>Carpentry</li>
            <li>Painting</li>
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Drywall</li>
            <li>Demolition</li>
            <li>HVAC</li>
          </menu>
          <p className={styles.info}>With dedicated employees on hand, we are ready to respond to whatever job requests our customers need. Customer satisfaction guaranteed after the first visit, or we make it right!</p>
        </div>
      </div>
      <Testimonial/>
    </div>
  )
}
