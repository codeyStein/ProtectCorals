import React from "react"
import Image from "next/image"
import Link from "next/link"
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

<div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>   
      </Link>
      <Link href="/donate">
        <a>Donate</a>
      </Link>
      <Link href="/joinus">
        <a>Join Us</a>        
      </Link>
      <Link href="/contact">
       <a>Contact</a>
      </Link>

</div>



      </div>
      <button className="nav--icon" onClick={toggleLinks}> <FaBars /> </button>
    </nav>
    
  </div>
  )
}
