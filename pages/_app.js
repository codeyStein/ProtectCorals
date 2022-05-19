import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className='Appp'>
    <Head>
      {/* Primary Meta Tags */}
      <title>Protect Corals</title>
      <meta name="title" content="Protect Corals" />
      <meta name="description" content="Make 2022 the year you make a difference" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Protect Corals" />
      <meta property="og:description" content="Make 2022 the year you make a difference" />
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Protect Corals" />
      <meta property="twitter:description" content="Make 2022 the year you make a difference" />
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
    </Head>
  <h1> App </h1>
    </div>

  )
}

export default MyApp
