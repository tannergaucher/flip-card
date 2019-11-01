import React from 'react'
import { useHistory } from 'react-router-dom'

import { Login } from '../auth'
import { StyledPage, Button } from '../styles'

export default function LoginPage() {
  const history = useHistory()

  return (
    <StyledPage>
      <h1 className="title-center">Log in to your account</h1>
      <Login />
      <Button
        fill
        plain
        onClick={() => {
          history.push(`/signup`)
        }}
      >
        Signup
      </Button>
    </StyledPage>
  )
}
