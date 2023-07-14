import React from 'react'
import {Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <span>
      <img src="index.jpeg" />
      <h1>Kisan Mitar</h1>
      </span>

      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/updates'>Updates</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
      </div>

    </nav>
  )
}

export default Navbar