import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { MyCardsContext } from '../context'

export default function DeleteCardButton({ cardId }) {
  const [loading, setLoading] = useState(false)
  const { data, setMyCards } = useContext(MyCardsContext)
  const history = useHistory()

  return (
    <form
      className="form"
      onSubmit={async e => {
        e.preventDefault()
        setLoading(true)
        const token = localStorage.getItem('token')
        const res = await fetch(`/.netlify/functions/delete-card`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cardId,
            token,
          }),
        })

        if (res.ok) {
          setMyCards({
            cards: data.cards.filter(contextCard => contextCard._id !== cardId),
          })
          setLoading(false)
          history.push(`/`)
        } else {
          const { error } = await res.json()
          console.log(error)
          setLoading(false)
        }
      }}
    >
      <button
        className="btn"
        type="submit"
        disabled={loading}
        style={{
          borderColor: `var(--bg-1)`,
          boxShadow: `none`,
          color: `var(--accent-2)`,
        }}
      >
        Delete this card
      </button>
    </form>
  )
}
