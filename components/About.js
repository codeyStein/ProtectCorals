import React from "react"

export default function About() {

	const wave = "./images/about/wave.svg"

	return (
		<div className="About">
			<img src={wave} alt="about section divder" className="about--wave" draggable={false}/>
			<div className="about--container">
				<h2>About</h2>
				<p>
					We are a group of high school student on a mission to help mitigate our planet’s climate crisis, as well as aid communities which are in need of resources.....
				</p>
				<button>Learn More...</button>
			</div>
		</div>
	)
}

