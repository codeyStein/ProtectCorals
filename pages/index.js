import Head from "next/head"
import Image from "next/image"
import Modal from "../node_modules/react-modal"

import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Main from "../components/Main"
import About from "../components/About"
import React from "react"

import { 
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";


export default function Home() {

	const [showModal, setShowModal] = React.useState(false)

	const modalLogo = "/images/logo-modal.png"

React.useEffect(() => {
  showModal ? document.body.classList.add('ReactModal__Body--open') : document.body.classList.remove('ReactModal__Body--open')
}, [showModal])


  return (

    <div className="Index">

    <Modal
      className="Modal"
      overlayClassName="Overlay"
      isOpen={showModal}
      shouldCloseOnOverlayClick
      onRequestClose={() => setShowModal(false)} 
  >
      <Image src={modalLogo} alt="ProtectCorals Info Modal Logo" width="361" height="312" className="modal__image"/>

      <h2>Contact Us</h2>

      <div className="list--socials">
        <a href="https://www.facebook.com/protectcorals/"> <FaFacebookSquare /></a>
        <a href="https://www.instagram.com/protectcorals/"> <FaInstagramSquare /></a>
      </div>

      <div className="list--contact">
        <p><i><FaWhatsappSquare /></i> +503 7648-7592</p>
        <p> <i><FaEnvelope /></i> PROTECTCORALS0418@GMAIL.COM </p>
      </div>

      <button onClick={() => setShowModal(false)}>Got It!</button>
    </Modal>  

    <Banner />
    <Nav />
    <Main openModal={() => setShowModal(true)} />
		<About />
		
    <Head>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />

      {/* Primary Meta Tags */}
      <title>Protect Corals</title>
      <meta name="title" content="Protect Corals" />
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
