import React, { useContext, useState } from 'react'

import { DeleteCardButton } from '.'
import { MY_CARDS_CONTEXT } from '../context'
import { useHistory } from 'react-router-dom'

export default function EditCardForm({ frontText, backText, cardId }) {
  const [newFrontText, setNewFrontText] = useState('')
  const [newBackText, setNewBackText] = useState('')
  const [loading, setLoading] = useState(false)
  const { data, setMyCards } = useContext(MY_CARDS_CONTEXT)

  const history = useHistory()

  return (
    <>
      <fieldset className="fieldset" disabled={loading}>
        <form
          className="form"
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
                frontText: newFrontText,
                backText: newBackText,
                cardId,
                token,
              }),
            })

            if (res.ok) {
              const {
                data: { card },
              } = await res.json()

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
            className="input"
            type="text"
            defaultValue={frontText}
            onChange={e => setNewFrontText(e.target.value)}
          />
          <input
            className="input"
            type="text"
            defaultValue={backText}
            onChange={e => setNewBackText(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            Save Changes
          </button>
          <br />
        </form>
      </fieldset>
      <DeleteCardButton cardId={cardId} />
    </>
  )
}
