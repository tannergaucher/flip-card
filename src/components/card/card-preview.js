import React, { useState, useRef, useEffect } from 'react'
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

  const buttonEl = useRef(null)

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = e => {
    console.log(e.target)
    console.log(buttonEl.current)

    if (e.target === buttonEl.current) {
      console.log(`INSIDE`)
      setCopied(true)
      navigator.clipboard.writeText(`http://foo.com/card/${card._id}`)
    } else {
      console.log(`outside`)
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
      >
        {copied ? 'Copied!' : 'Copy Link and Share'}
      </Button>
    </StyledCardPreview>
  )
}
