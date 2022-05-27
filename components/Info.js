import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal"

export default function Info() {
  return (
    <div className="info">
     <a className="info" onClick={console.log('clicked')}> <FontAwesomeIcon icon={faCircleInfo} style={
       {
          fontSize: 45,
        }
       }/> </a>
    </div>
  )
}
