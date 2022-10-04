import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duguid Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.mainContact}>
        <div id={styles.contactTitle}>
            <h1 class="h1">Contact Us</h1>
        </div>
        <div id={styles.contactInfo}>
          <div id={styles.opHours}>
              <h3>Hours of Operation</h3>
              <p style={{fontSize: '20px'}}>We are open Monday through Friday</p>
              <ul>
                <li>Mon: 9AM - 5PM </li>
                <li>Tue: 9AM - 5PM </li>
                <li>Wed: 9AM - 5PM </li>
                <li>Thu: 9AM - 5PM </li>
                <li>Fri: 9AM - 5PM </li>
                <li>Sat: CLOSED </li>
                <li>Sun: CLOSED </li>
              </ul>
            </div>
            <div id={styles.contactBasic}>
              <ul>
                <h3>Phone:</h3>
                <li>123-456-7890</li>
                <h3>Email:</h3>
                <li>info@duguid_construction.com</li>
                <h3>Address:</h3>
                <li>1234 Main St.</li>
                <li>Dodge City, Kansas, 12345</li>
                <li>PO Box 12345</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

