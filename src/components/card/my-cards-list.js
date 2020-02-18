import React, { useContext } from 'react'

import { CardPreview } from '../card'
import { MyCardsContext } from '../context'

export default function MyCardsList() {
  const { data, loading, error } = useContext(MyCardsContext)

  if (loading) return <h2>Loading cards...</h2>

  if (error)
    return <h2 style={{ color: `var(--warning)` }}>Error! ${error.message}</h2>

  return (
    <>
      {data &&
        data.cards &&
        data.cards.map(card => <CardPreview key={card._id} card={card} />)}
    </>
  )
}
