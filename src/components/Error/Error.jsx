import react from 'react'

import "./Error.css"

import { NavLink, useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate();

  const goBack=()=>{
    navigate(-1);
  }
  
  return (
    <>
      <div className="error-container">
        <div className="error">
          <h1>404</h1>
          <p>Page not found!</p>
          <NavLink onClick={goBack}>Go back</NavLink>
        </div>
      </div>
    </>
  )
}

export default Error;