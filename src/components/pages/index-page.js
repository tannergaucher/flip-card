import { CardsGrid, FlipCard } from '../card'
import React, { useContext } from 'react'

import { IsAuthContext } from '../context'

export default function IndexPage() {
  const { isAuth } = useContext(IsAuthContext)

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
