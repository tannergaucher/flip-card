import React, { useContext } from 'react'

import { CardsGrid, FlipCard } from '../card'
import { IS_AUTH_CONTEXT } from '../context'

export default function IndexPage() {
  const { isAuth } = useContext(IS_AUTH_CONTEXT)

  return (
    <div className="padding page">
      {isAuth ? (
        <CardsGrid />
      ) : (
        <FlipCard frontText="Welcome to FlipCard!" backText="Please log in" />
      )}
    </div>
  )
}
