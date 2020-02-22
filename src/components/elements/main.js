import {
  CardPage,
  CreateCardPage,
  EditCardPage,
  IndexPage,
  LoginPage,
  SignupPage,
} from '../pages'
import { Route, Switch } from 'react-router-dom'

import React from 'react'

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
