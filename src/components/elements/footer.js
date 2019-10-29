import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0.5rem 1rem;
`

export default function Footer() {
  return (
    <StyledFooter>
      <h3>Minimal Serverless App</h3>
    </StyledFooter>
  )
}
