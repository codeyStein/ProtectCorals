import React from "react"
import styles from "../styles/ButtonCTA.module.css"

export default function ButtonCTA(props) {
  return (
    <button className={styles.ctaButton}>{props.label}</button>
  )
}

