import React from 'react'

import { Signup } from '../auth'
import { StyledPage } from '../styles'

export default function SignupPage() {
  return (
    <StyledPage>
      <h1>Sign up for an account</h1>
      <Signup />
    </StyledPage>
  )
}
