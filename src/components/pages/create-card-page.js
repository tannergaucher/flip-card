import React, { useContext } from 'react'

import { CreateCardForm } from '../card'
import { IS_AUTH_CONTEXT } from '../context'

export default function CreateCardPage() {
  const { isAuth } = useContext(IS_AUTH_CONTEXT)

  return (
    <div className="padding page container center">
      {isAuth ? <CreateCardForm /> : null}
    </div>
  )
}
