import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { MyCardsContext } from '../context'
import { Form, Button } from '../styles'

export default function DeleteCardButton({ card }) {
  const { data, setMyCards } = useContext(MyCardsContext)
  const history = useHistory()

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault()
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
          history.push(`/`)
        } else {
          const { error } = await res.json()
          console.log(error)
        }
      }}
    >
      <Button type="submit">Delete this card</Button>
    </Form>
  )
}
