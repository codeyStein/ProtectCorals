import React from "react"
import Image from "next/image"
import { 
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from "react-icons/fa";

export default function Modal() {
  const modalLogo = "/images/logo-modal.png"

  return (
    <div className="modal">

    <div className="modal--container">
      <Image src={modalLogo} alt="ProtectCorals Info Modal Logo" width="361" height="312"/>

      <h1>Contact Us</h1>
      
      <div className="list--socials">
        <a href="https://www.facebook.com/protectcorals/"> <FaFacebookSquare /></a>
        <a href="https://www.instagram.com/protectcorals/"> <FaInstagramSquare /></a>
      </div>

      <div className="list--contact">
        <p> <FaWhatsappSquare /> +503 7648-7592</p>
        <p> <FaEnvelope /> PROTECTCORALS0418@GMAIL.COM </p>
      </div>

    <button>Got It!</button>

    </div>

    </div>
  )
}

