import Head from "next/head"
import Image from "next/image"

import Banner from "../components/Banner"
import Nav from "../components/Nav"
import styles from "../styles/Shop.module.css"
import showcaseData from "../data/showcase"
import cardData from "../data/card"

export default function Shop() {


  console.log(showcaseData)
  console.log(cardData)

  const showcase = showcaseData.map(item => {
    return (
      <img key={item.id} src={item.imageUrl} alt={`${item.alt} ${item.id}`}  className={styles.showcaseItem}/>
    )
  })

  return (
    <div className='Shop'>

    <Banner />
    <Nav />


    <h1 className={styles.header}> Shop </h1>

    <div className={styles.showcase}>
      {showcase}
    </div>

      
    <Head>
      {/* Primary Meta Tags */}
      <title>Protect Corals - Shop</title>
      <meta name="title" content="Protect Corals - Shop" />
      <meta name="description" content="Make 2022 the year you make a difference" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://protectcorals.netlify.app" />
      <meta property="og:title" content="Protect Corals" />
      <meta property="og:description" content="Make 2022 the year you make a difference" />
      <meta property="og:image" content="https://protectcorals.netlify.appassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://protectcorals.netlify.app" />
      <meta property="twitter:title" content="Protect Corals" />
      <meta property="twitter:description" content="Make 2022 the year you make a difference" />
      <meta property="twitter:image" content="https://protectcorals.netlify.appassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
    </Head>
    
    </div>

  )
}

