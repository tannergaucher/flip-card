import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../styles'

const StyledCardPreview = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--accent);

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

  const buttonEl = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])

  // TODO: FIX CONSOLE WARNING
  const handleClick = e => {
    if (e.target === buttonEl.current) {
      setCopied(true)
      navigator.clipboard.writeText(
        `${process.env.REACT_APP_SITE_URL}/card/${card._id}`
      )
    } else {
      setCopied(false)
    }
  }

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
        ref={buttonEl}
        onKeyDown={e => {
          handleClick(e)
        }}
        style={{
          borderColor: copied ? `blue` : ``,
          color: copied ? `blue` : ``,
        }}
      >
        {copied ? 'Copied!' : 'Copy Link and Share'}
      </Button>
    </StyledCardPreview>
  )
}
