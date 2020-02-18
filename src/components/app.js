import {
  CardPage,
  EditCardPage,
  IndexPage,
  LoginPage,
  SignupPage,
} from './pages'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import React from 'react'

export default function App() {
  return (
    <Router>
      <header>header</header>
      <Main />
      <footer>Footer</footer>
    </Router>
  )
}

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/card/:cardId">
          <CardPage />
        </Route>
        <Route path="/edit/:cardId">
          <EditCardPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </main>
  )
}
