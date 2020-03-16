import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { MyCardsContext } from '../context'

export default function CreateCardForm() {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const [loading, setLoading] = useState(false)

  const { data, setMyCards } = useContext(MyCardsContext)

  const history = useHistory()

  return (
    <fieldset
      className="fieldset"
      disabled={loading}
      onSubmit={async e => {
        setLoading(true)
        e.preventDefault()
        const token = localStorage.getItem('token')
        const res = await fetch(`/.netlify/functions/create-card`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            frontText,
            backText,
            token,
          }),
        })

        if (res.ok) {
          const {
            data: { card },
          } = await res.json()

          setMyCards({
            cards: [card, ...data.cards],
          })

          setFrontText('')
          setBackText('')
          setLoading(false)
          history.push(`/`)
        } else {
          const { error } = await res.json()
          console.log(error)
          setLoading(false)
        }
      }}
    >
      <form className="form">
        <input
          className="input"
          placeholder="Front"
          value={frontText}
          onChange={e => setFrontText(e.target.value)}
          required
        />
        <input
          className="input"
          placeholder="Back"
          value={backText}
          onChange={e => setBackText(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          Create Card
        </button>
      </form>
    </fieldset>
  )
}
