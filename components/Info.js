import React from "react"

import { 
  FaInfoCircle,
} from "react-icons/fa";


export default function Info(props) {

  return (
    <div className="info">
     <a onClick={props.showModal}> <FaInfoCircle /> </a>
    </div>
  )

}
