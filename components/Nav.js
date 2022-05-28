import React from "react"
import Image from "next/image"
import { FaBars } from "react-icons/fa";

export default function Nav() {

  const navImage = "/images/logo-nav.png"

  const [linksVisible, setLinksVisible] = React.useState(false)

  function toggleLinks() {
    setLinksVisible(prevValue => !prevValue)
    console.log(linksVisible)
  }
  
  return (
    <div className="nav">
      <nav>
      <a className="nav--logo" href="#" > <Image src={navImage} alt="ProtectCorals Navbar Logo" width="182" height="48" loading="lazy"/> </a>
      <div className="nav--list" id={linksVisible ? "hidden" : ""}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Shop</a>
          <a href="#">Donate</a>
          <a href="#">Join Us</a>
          <a href="#">Contact</a>
      </div>
      <button className="nav--icon" onClick={toggleLinks}> <FaBars /> </button>
    </nav>
    
  </div>
  )
}
