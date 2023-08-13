import react from 'react'

import { NavLink } from "react-router-dom"

import "./Thank.css"

const Thank = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <h1>Thanks!</h1>
          <p>The form was submitted successfully.</p>
          <NavLink to="/" >Go back</NavLink>
        </div>
      </div>
    </>
  )
}

export default Thank;