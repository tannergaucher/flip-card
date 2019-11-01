import React from 'react'
import { useHistory } from 'react-router-dom'

import { Signup } from '../auth'
import { StyledPage, Button } from '../styles'

export default function SignupPage() {
  const history = useHistory()
  return (
    <StyledPage>
      <h1 className="title-center">Sign up for an account</h1>
      <Signup />
      <Button
        fill
        plain
        onClick={() => {
          history.push(`/login`)
        }}
      >
        Login
      </Button>
    </StyledPage>
  )
}
