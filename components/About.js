import React from "react"

export default function About() {

	const wave = "./images/about/wave.svg"

	return (
		<div className="About">
			<h1>About section! </h1>
			<img src={wave} alt="about section divder" className="about--wave" />
		</div>
	)
}

