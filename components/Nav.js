import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

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
      <a className="nav--logo" href="#" > <Image src={navImage} alt="ProtectCorals Navbar Logo" width="182" height="48"/> </a>
      <div className="nav--list" id={linksVisible ? "hidden" : ""}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Shop</a>
          <a href="#">Donate</a>
          <a href="#">Join Us</a>
          <a href="#">Contact</a>
      </div>
      <button className="nav--icon" onClick={toggleLinks}> <FontAwesomeIcon icon={faBars} style={{ fontSize: 40}}/> </button>
    </nav>
    
  </div>
  )
}
