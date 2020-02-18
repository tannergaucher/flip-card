import React, { useEffect, useRef, useState } from 'react'

import { useHistory } from 'react-router-dom'

export default function CardPreview({ card }) {
  const [copied, setCopied] = useState(false)
  const history = useHistory()
  const buttonEl = useRef(null)

  useEffect(
    handleClick => {
      document.addEventListener('mousedown', handleClick)
      return () => {
        document.removeEventListener('mousedown', handleClick)
      }
    },
    [handleClick]
  )

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
    <>
      <h2>{card.frontText}</h2>
      <h2>{card.backText}</h2>
      <button
        className="edit-card-btn"
        onClick={() => history.push(`/edit/${card._id}`)}
      >
        Edit Card
      </button>
      <button
        light
        className="view-card-btn"
        onClick={() => history.push(`/card/${card._id}`)}
      >
        View Card
      </button>
      <button
        ref={buttonEl}
        fill
        onKeyDown={e => {
          handleClick(e)
        }}
        style={{
          borderColor: copied ? `blue` : ``,
          color: copied ? `blue` : ``,
        }}
      >
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </>
  )
}
