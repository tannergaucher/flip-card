import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { MyCardsContext } from '../context'
import { Form, Button } from '../styles'

export default function DeleteCardButton({ card }) {
  const [loading, setLoading] = useState(false)
  const { data, setMyCards } = useContext(MyCardsContext)
  const history = useHistory()

  return (
    <Form
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
            cardId: card._id,
            token,
          }),
        })

        if (res.ok) {
          setMyCards({
            cards: data.cards.filter(
              contextCard => contextCard._id !== card._id
            ),
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
      <Button
        type="submit"
        style={{
          background: loading ? 'grey' : '',
        }}
      >
        Delete this card
      </Button>
    </Form>
  )
}
