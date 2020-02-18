import { CreateCardForm, MyCardsList } from '../card'
import React, { useContext } from 'react'

import { IsAuthContext } from '../context'
import { useHistory } from 'react-router-dom'

export default function IndexPage() {
  const { isAuth } = useContext(IsAuthContext)

  return <>{isAuth ? <AuthedView /> : <NotAuthedView />}</>
}

function AuthedView() {
  return (
    <>
      <CreateCardForm />
      <MyCardsList />
    </>
  )
}

function NotAuthedView() {
  const history = useHistory()

  return (
    <>
      <h1 className="welcome">Welcome to FlipCard</h1>
      <h2 className="description">Share funny things with friends. Ha ha!</h2>
      <button fill primary onClick={() => history.push(`/login`)}>
        Log In
      </button>
      <br />
      <button fill onClick={() => history.push(`/signup`)}>
        Create an Account
      </button>
    </>
  )
}
