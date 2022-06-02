import React from "react"

import { 
  FaInfoCircle,
} from "react-icons/fa";

import Modal from "./Modal"

export default function Info(props) {
  return (
    <div className="info">
     <a onClick={console.log(props.show)}> <FaInfoCircle /> </a>
    </div>
  )
}
