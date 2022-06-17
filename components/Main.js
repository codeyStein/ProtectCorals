import React from "react"
import Link from "next/link"
import { 
  FaInfoCircle,
} from "react-icons/fa";


export default function Main(props) {


  return (
    <div className="main">

      <div className="main--container">
        <h1 className="main--header">Make 2022 <br />the year you make <br />an impact</h1>
        <Link href="/join">
					<button className="main--button">Become A Volunteer</button>
				</Link>
        <div className="info">
          <a onClick={props.openModal}> <FaInfoCircle /> </a>
			  </div>
      </div>

    </div>
  )
}
