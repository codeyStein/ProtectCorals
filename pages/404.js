import Head from "next/head"
import Link from "next/link"

import Modal from "../components/Modal"
import Info from "../components/Info"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Main from "../components/Main"
import ButtonCTA from "../components/ButtonCTA"
import React from "react"


export default function Home() {

  const [showModal, setshowModal] = React.useState(false)

  return (

    <div className="Notfound">

    <Banner />
    <Nav />

    <div className="notfound--container">
    <div>

      <h1 className="notfound--header">404 Error</h1>
      <p className="notfound--paragraph">This page is lost at sea...</p>

      <div className="buttons--nav">
        <Link href="/">
        <ButtonCTA label="Home"/>
        </Link>
        <Link href="/shop">
          <ButtonCTA label="Shop"/>
        </Link>
      </div>
    </div>


    </div>

    
    

    <Head>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Primary Meta Tags */}
      <title>404 Not Found</title>
      <meta name="title" content="Protect Corals" />
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
