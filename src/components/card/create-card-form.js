import React, { useState, useContext } from 'react'

import { Fieldset, Form, Input, Button } from '../styles'
import { MyCardsContext } from '../context'

export default function CreateCardForm() {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const { data, setMyCards } = useContext(MyCardsContext)

  return (
    <Fieldset
      onSubmit={async e => {
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
        } else {
          const { error } = await res.json()
          console.log(error)
        }
      }}
    >
      <Form>
        <Input
          placeholder="Front"
          value={frontText}
          onChange={e => setFrontText(e.target.value)}
          required
        />
        <Input
          placeholder="Back"
          value={backText}
          onChange={e => setBackText(e.target.value)}
          required
        />
        <Button type="submit" primary>
          Create Card
        </Button>
      </Form>
    </Fieldset>
  )
}
