import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Testimonial from '../components/Testimonial'
import Header from '../components/Header.js'
import ContactUs from '../components/ContactUs.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {
  const serviceImages = [
    {service: "Carpentry", url: "/img/carpentry.jpeg"},
    {service: "Painting", url: "/img/painting.jpeg"},
    {service: "Plumbing", url: "/img/plumbing.jpeg"},
    {service: "Electrical", url: "/img/electrical.webp"},
    {service: "Drywall", url: "/img/drywall.jpeg"},
    {service: "Demolition", url: "/img/demolition.jpeg"},
    {service: "HVAC", url: "/img/hvac.jpeg"},
    {service: "Contact Us Today!", url: "/img/contactcard.png"}
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Duguid Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.aboutContainer}>
        <Header />
        <h1 className={styles.aboutTitle}>Our Story</h1>
        <div className={styles.infoContainer}>
          <p className={styles.info}>Duguid Construction is a 50 year old residential and farming construction business engaging in jobs of all shapes and sizes. Our company has a particular focus on building client relationships by providing high quality work. The different types of jobs we provide include:</p>
          <div className={styles.imageContainer}>
            {serviceImages.map((category, index) =>
                <div className={styles.serviceCard} key={index}>
                <Card style={{display: "inline-block"}} sx={{ width: 350 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={category.url}
                      alt={category.service}
                    />
                    <CardContent>
                      <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                        {category.service}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </div>
            )}
          </div>
          <p className={styles.info}>With dedicated employees on hand, we are ready to respond to whatever job requests our customers need. Customer satisfaction guaranteed after the first visit, or we make it right!</p>
        </div>
      </div>
      <Testimonial/>
      <ContactUs/>
    </div>
  )
}
