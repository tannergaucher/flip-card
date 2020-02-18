import React from 'react'
import { Signup } from '../auth'
import { useHistory } from 'react-router-dom'

export default function SignupPage() {
  const history = useHistory()
  return (
    <>
      <h1 className="title-center">Sign up for an account</h1>
      <Signup />
      <button
        onClick={() => {
          history.push(`/login`)
        }}
      >
        Login
      </button>
    </>
  )
}
