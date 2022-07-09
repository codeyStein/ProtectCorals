import React from "react"
import styles from "../styles/Button.module.css"

export default function Button(props) {


return (
<button onClick={props.clickHandler} className={`
		${styles.button} 
		${props.outline && styles.outline}
		${props.outline===false && styles.fill}
		${props.color==="blue" && props.outline ? styles.blue__outline :  props.color==="white" && props.outline ? styles.white__outline : null}
		${props.color==="blue" && props.outline===false ? styles.blue__filled : props.color==="white" && props.outline===false ? styles.white__filled : null}
`}>{props.children}</button>
 )
}

