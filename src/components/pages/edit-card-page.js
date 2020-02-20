import React, { useContext } from 'react'

import { EditCardForm } from '../card'
import { IsAuthContext } from '../context'
import { useHistory } from 'react-router-dom'

export default function EditCardPage() {
  const { isAuth } = useContext(IsAuthContext)

  const history = useHistory()

  const { frontText, backText, cardId } = history.location.state

  return (
    <div className="padding page container center">
      <EditCardForm frontText={frontText} backText={backText} cardId={cardId} />
    </div>
  )
}
