import React, { useContext } from 'react'

import { StyledPage } from '../styles'
import { UserContext } from '../context'

export default function IndexPage() {
  const { loading, error, data } = useContext(UserContext)

  return (
    <StyledPage>
      <h1>Index Page</h1>
      {loading && `Loading user...`}
      {error && `Error: ${error.message}`}
      <h3>{data && data.user && `${data.user.email}`}</h3>
    </StyledPage>
  )
}
