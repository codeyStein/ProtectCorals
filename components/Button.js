import React from "react"

export default function Button(props) {


const style = {
background: props.outline ? "transparent"
: props.color==="blue" ? "#3B66CE" 
: "#fff"
}

	return (
		<button style={style}>{props.children}</button>
 )
}

