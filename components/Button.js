import React from "react"

export default function Button(props) {


const style = {
background: props.outline ? "transparent"
					  : props.color==="blue" ? "#3B66CE" 
						: "#fff",
border: props.color==="white" && props.outline ? "1px solid #fff"
				 : props.color==="blue" && props.outline ? "1px solid #3B66CE" 
			   : "none",
color: props.color==="white" && props.outline ? "#fff"
: props.color==="blue" && props.outline ? "#3B66CE"
: props.color==="blue" && props.outline===false ? "#fff"
: "#3B66CE" 

}

	return (
		<button style={style}>{props.children}</button>
 )
}

