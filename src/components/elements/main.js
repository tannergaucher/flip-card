import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  CardPage,
  CreateCardPage,
  EditCardPage,
  IndexPage,
  LoginPage,
  SignupPage,
} from '../pages'

export default function Main() {
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
