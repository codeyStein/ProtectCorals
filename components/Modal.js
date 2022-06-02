import React from "react"
import Image from "next/image"
import styles from "../styles/Modal.module.css"
import { 
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";

export default function Modal(props) {
  const modalLogo = "/images/logo-modal.png"

  return (
    <div className={styles.modal}>

    <div className={styles.modalContainer}>

      <Image src={modalLogo} alt="ProtectCorals Info Modal Logo" width="361" height="312" className={styles.modalImage}/>

      <h1>Contact Us</h1>
      
      <div className="list--socials">
        <a href="https://www.facebook.com/protectcorals/"> <FaFacebookSquare /></a>
        <a href="https://www.instagram.com/protectcorals/"> <FaInstagramSquare /></a>
      </div>

      <div className="list--contact">
        <p> <FaWhatsappSquare /> +503 7648-7592</p>
        <p> <FaEnvelope /> PROTECTCORALS0418@GMAIL.COM </p>
      </div>

      <button onClick={console.log(props.showModal)}>Got It!</button>

    </div>

    </div>
  )
}

