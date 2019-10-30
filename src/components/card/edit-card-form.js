import React from 'react'

import { Input, Form, Fieldset, Button } from '../styles'

export default function EditCardForm({ card }) {
  return (
    <Fieldset>
      <Form>
        <Input type="text" defaultValue={card.frontText} />
        <Input type="text" defaultValue={card.backText} />
        <Button primary>Save Changes</Button>
      </Form>
    </Fieldset>
  )
}
