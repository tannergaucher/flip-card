import React, { useContext, useState } from 'react'

import { MyCardsContext } from '../context'

export default function CreateCardForm() {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const [loading, setLoading] = useState(false)

  const { data, setMyCards } = useContext(MyCardsContext)

  return (
    <fieldset
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
        } else {
          const { error } = await res.json()
          console.log(error)
          setLoading(false)
        }
      }}
    >
      <form>
        <input
          placeholder="Front"
          value={frontText}
          onChange={e => setFrontText(e.target.value)}
          required
        />
        <input
          placeholder="Back"
          value={backText}
          onChange={e => setBackText(e.target.value)}
          required
        />
        <button
          type="submit"
          primary
          style={{
            background: loading ? 'grey' : '',
          }}
        >
          Create Card
        </button>
      </form>
    </fieldset>
  )
}
