import React from 'react'

import { Login } from '../auth'
import { StyledPage } from '../styles'

export default function LoginPage() {
  return (
    <StyledPage>
      <h1>Log in to your account</h1>
      <Login />
    </StyledPage>
  )
}
