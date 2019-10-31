import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../styles'

const StyledCardPreview = styled.div`
  padding: 1rem;
  background: #f5f5f5;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  .view-card-btn {
    margin-right: 1rem;
  }

  .edit-card-btn {
    margin-right: 1rem;
  }
`

export default function CardPreview({ card }) {
  const [copied, setCopied] = useState(false)

  const history = useHistory()

  return (
    <StyledCardPreview>
      <h2>Front: {card.frontText}</h2>
      <h2>Back: {card.backText}</h2>
      <Button
        light
        className="view-card-btn"
        onClick={() => history.push(`/card/${card._id}`)}
      >
        View Card
      </Button>
      <Button
        className="edit-card-btn"
        onClick={() => history.push(`/edit/${card._id}`)}
      >
        Edit Card
      </Button>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(`http://foo.com/card/${card._id}`)
          setCopied(true)
          // listen for button unFocus, set copied false
        }}
      >
        {copied ? 'Copied!' : 'Copy Link and Share'}
      </Button>
    </StyledCardPreview>
  )
}
