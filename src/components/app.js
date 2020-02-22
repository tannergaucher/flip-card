import {
  CardPage,
  CreateCardPage,
  EditCardPage,
  IndexPage,
  LoginPage,
  SignupPage,
} from './pages'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navlinks, ScrollToTop } from './elements'
import React, { useContext } from 'react'

import { IsAuthContext } from './context'
import { Logout } from './auth'

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

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/create-card">
          <CreateCardPage />
        </Route>
        <Route path="/card/:cardId">
          <CardPage />
        </Route>
        <Route path="/edit-card/:cardId">
          <EditCardPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </main>
  )
}
