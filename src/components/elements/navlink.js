import { Link } from 'react-router-dom'
import React from 'react'

export default function Navlink({ to, text, location }) {
  return (
    <Link
      className="nav-link"
      data-is-active={location.pathname === to}
      to={to}
    >
      {text}
    </Link>
  )
}
