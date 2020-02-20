import React, { useContext } from 'react'

import { CreateCardForm } from '../card'
import { IsAuthContext } from '../context'

export default function CreateCardPage() {
  const { isAuth } = useContext(IsAuthContext)

  return (
    <div className="padding page container center">
      {isAuth ? <CreateCardForm /> : null}
    </div>
  )
}
