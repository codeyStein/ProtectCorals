import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info">
     <button className="info" onClick={console.log('clicked')}> <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: 40}}/> </button>
    </div>
  )
}
