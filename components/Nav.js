import Image from "next/image"

export default function Nav() {

  const navImage = "/images/logo-nav.png"
  
  return (
    <div className="nav">
      <nav>
      <ul className="nav--list">
        <li className="nav--item">
          <a href="#">
            <Image src={navImage} alt="ProtectCorals Navbar Logo" width="182" height="48"/>
          </a>
        </li>
        <li className="nav--item">
          <a href="#">Home</a>
        </li>
        <li className="nav--item">
          <a href="#">About Us</a>
        </li>
        <li className="nav--item">
          <a href="#">Shop</a>
        </li>
        <li className="nav--item">
          <a href="#">Donate</a>
        </li>
        <li className="nav--item">
          <a href="#">Join Us</a>
        </li>
        <li className="nav--item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
