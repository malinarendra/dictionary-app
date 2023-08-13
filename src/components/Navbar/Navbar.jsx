import react from 'react'

import "./Navbar.css"

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            MyDictionary
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar;