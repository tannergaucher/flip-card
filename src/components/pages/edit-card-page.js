import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { EditCardForm } from '../card'
import { IS_AUTH_CONTEXT } from '../context'

export default function EditCardPage() {
  const { isAuth } = useContext(IS_AUTH_CONTEXT)
  const history = useHistory()
  const { frontText, backText, cardId } = history.location.state

  return (
    <div className="padding page container center">
      {isAuth ? (
        <EditCardForm
          frontText={frontText}
          backText={backText}
          cardId={cardId}
        />
      ) : null}
    </div>
  )
}
