import React, { useContext, useState } from 'react'

import { MyCardsContext } from '../context'
import { useHistory } from 'react-router-dom'

export default function EditCardForm({ card }) {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const [loading, setLoading] = useState(false)
  const { data, setMyCards } = useContext(MyCardsContext)

  const history = useHistory()

  return (
    <fieldset disabled={loading}>
      <form
        onSubmit={async e => {
          e.preventDefault()
          setLoading(true)

          const token = localStorage.getItem('token')
          const res = await fetch(`/.netlify/functions/edit-card`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              frontText,
              backText,
              cardId: card._id,
              token,
            }),
          })

          if (res.ok) {
            const {
              data: { card },
            } = await res.json()
            // grab the card of that id from context and replace with with data.card
            // immutable?
            const foundIndex = data.cards.findIndex(
              contextCard => contextCard._id === card._id
            )
            data.cards[foundIndex] = card
            setMyCards(data)
            setLoading(false)
            history.push(`/`)
          } else {
            const { error } = await res.json()
            console.log(error)
            setLoading(false)
          }
        }}
      >
        <input
          type="text"
          defaultValue={card.frontText}
          onChange={e => setFrontText(e.target.value)}
        />
        <input
          type="text"
          defaultValue={card.backText}
          onChange={e => setBackText(e.target.value)}
        />
        <button primary type="submit" disabled={loading}>
          Save Changes
        </button>
      </form>
    </fieldset>
  )
}
