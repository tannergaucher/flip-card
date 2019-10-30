import React, { useContext } from 'react'
import styled from 'styled-components'

import { Logout } from '../auth'
import { IsAuthContext } from '../context'
import { Link } from '../styles'

const StyledHeader = styled.header`
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`

export default function Header() {
  const { isAuth } = useContext(IsAuthContext)

  return (
    <StyledHeader>
      <Link to="/">
        <h3>FlipCard</h3>
      </Link>
      {isAuth && <Logout />}
    </StyledHeader>
  )
}
