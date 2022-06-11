import Info from "./Info"
import React from "react"
import Link from "next/link"


export default function Main() {


  return (
    <div className="main">

      <div className="main--container">
        <h1 className="main--header">Make 2022 <br />the year you make <br />an impact</h1>
				<Link href="/join">
					<button className="main--button">Become A Volunteer</button>
				</Link> 
      </div>

    </div>
  )
}
