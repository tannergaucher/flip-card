import React, { useContext } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import { Logout } from '../auth'
import { IsAuthContext } from '../context'
import { Main, Navlinks, ScrollToTop } from '.'

export default function App() {
  const { isAuth } = useContext(IsAuthContext)

  return (
    <Router>
      <ScrollToTop />
      <header className="header" style={{ padding: `var(--space-sm)` }}>
        <Link to="/" className="nav-link">
          <h2 className="site-title title">Flipcard</h2>
        </Link>
        {isAuth && (
          <Link to="/create-card">
            <button className="btn btn-primary" style={{ margin: 0 }}>
              New Card
            </button>
          </Link>
        )}
        {!isAuth && <Navlinks />}
      </header>
      <Main />
      <footer className="footer" style={{ padding: `var(--space-sm)` }}>
        <Link to="/" className="nav-link">
          <h2 className="site-title title">Flipcard</h2>
        </Link>
        {isAuth && <Logout />}
      </footer>
    </Router>
  )
}
