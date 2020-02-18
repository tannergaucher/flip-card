import { Login } from '../auth'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {
  const history = useHistory()

  return (
    <>
      <h1 className="title-center">Log in to your account</h1>
      <Login />
      <button
        onClick={() => {
          history.push(`/signup`)
        }}
      >
        Log In
      </button>
    </>
  )
}
