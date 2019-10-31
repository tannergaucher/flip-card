import React, { useState } from 'react'

import { Input, Form, Fieldset, Button } from '../styles'

export default function EditCardForm({ card }) {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')

  return (
    <Fieldset>
      <Form
        onSubmit={async () => {
          const token = localStorage.getItem('token')
          const res = await fetch(`/.netlify/functions/edit-card`, {
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
            const { data } = res.json()
          } else {
            const { error } = res.json()
          }
        }}
      >
        <Input
          type="text"
          defaultValue={card.frontText}
          onChange={e => setFrontText(e.target.value)}
        />
        <Input
          type="text"
          defaultValue={card.backText}
          onChange={e => setBackText(e.target.value)}
        />
        <Button primary type="submit">
          Save Changes
        </Button>
      </Form>
    </Fieldset>
  )
}
