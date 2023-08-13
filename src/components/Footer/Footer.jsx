import react, { useEffect, useState } from 'react'

import "./Footer.css"

const Footer = () => {
  const [year,setYear]=useState("");

  useEffect(()=>{
    let currentYear = new Date().getFullYear();
    setYear(currentYear)
  },[])
  
  return (
    <>
      <footer>
        <p>&copy; {year} Maharashtra IN, Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer;