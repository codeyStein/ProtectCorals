import Head from "next/head"

import Banner from "../components/Banner"
import Nav from "../components/Nav"
import ButtonCTA from "../components/ButtonCTA"
import Button from "../components/Button"
import React from "react"


export default function Home() {

  return (

    <div className="Notfound">

    <Banner />
    <Nav />
 
    <div className="notfound--container">
    <div>

      <h1 className="notfound--header">404 Error</h1>
      <p className="notfound--paragraph">This page is lost at sea...</p>

      <div className="buttons--nav">
        <ButtonCTA label="Home" clickHandler="/"/>
        <ButtonCTA label="Shop" clickHandler="/shop"/>
        { /*<Button outline={true} color="blue" clickHandler={console.log("Button Clicked!")}>Awesome Button</Button>  */}
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
      <meta name="title" content="Protect Corals - Unknown Page" />
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
