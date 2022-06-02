import Link from "next/link"
import React from "react"
import styles from "../styles/ButtonCTA.module.css"

export default function ButtonCTA(props) {
  return (
    <Link href={props.clickHandler}>
      <button className={styles.ctaButton}>{props.label}</button>
    </Link>
  )
}

