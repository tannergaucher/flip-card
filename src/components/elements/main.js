import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignupPage, IndexPage } from '../pages'

export default function Main() {
  return (
    <main>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </main>
  )
}
