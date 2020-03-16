import React from 'react'
import { useLocation } from 'react-router-dom'

import { Navlink } from '../elements'

const AuthTabs = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <Navlink text="Log In" to="/login" location={location} />
      <Navlink text="Sign Up" to="/signup" location={location} />
    </nav>
  )
}

export default AuthTabs
