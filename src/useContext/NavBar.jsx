import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink>
    </>
  )
}
