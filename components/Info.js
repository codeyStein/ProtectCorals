import React from "react"

import { 
  FaInfoCircle,
} from "react-icons/fa";

import Modal from "./Modal"

export default function Info() {
  return (
    <div className="info">
     <a onClick={console.log('clicked')}> <FaInfoCircle /> </a>
    </div>
  )
}