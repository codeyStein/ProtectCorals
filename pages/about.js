
import Head from "next/head"

import Banner from "../components/Banner"
import Nav from "../components/Nav"
import React from "react"


export default function Home() {

  return (

    <div className="aboutPage">

    <Banner />
    <Nav />
 
    <div className="about--container">
      <h1>About</h1>
    </div>

    
    

    <Head>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Primary Meta Tags */}
      <title>ProtectCorals - About</title>
      <meta name="title" content="ProtectCorals - About" />
      <meta name="description" content="Make 2022 the year you make a difference" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://protectcorals.netlify.app" />
      <meta property="og:title" content="Protect Corals" />
      <meta property="og:description" content="Make 2022 the year you make a difference" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://protectcorals.netlify.app" />
      <meta property="twitter:title" content="Protect Corals" />
      <meta property="twitter:description" content="Make 2022 the year you make a difference" />
    </Head>
  
    </div>
  )
}
