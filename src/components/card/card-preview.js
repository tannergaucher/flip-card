import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../styles'

const StyledCardPreview = styled.div`
  .view-card-btn {
    margin-right: 1rem;
  }
`

export default function CardPreview({ card }) {
  const history = useHistory()

  return (
    <StyledCardPreview>
      <h2>{card.frontText}</h2>
      <Button
        className="view-card-btn"
        onClick={() => history.push(`/card/${card._id}`)}
      >
        View Card
      </Button>
      <Button onClick={() => history.push(`/edit/${card._id}`)}>
        Edit Card
      </Button>
    </StyledCardPreview>
  )
}
