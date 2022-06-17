import React from "react"

export default function About() {

	const wave = "./images/about/wave.svg"

	return (
		<div className="About">
			<img src={wave} alt="about section divder" className="about--wave" />
			<div className="about--container">
				<h2>About Section!</h2>
			</div>
		</div>
	)
}

