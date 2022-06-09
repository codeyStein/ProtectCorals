import React from "react"

import { 
  FaInfoCircle,
} from "react-icons/fa";

import Modal from "./Modal"

export default function Info(props) {

  let modalShown = true

  return (
    <div className="info">
     <a onClick={props.openModal}> <FaInfoCircle /> </a>
    </div>
  )
}
