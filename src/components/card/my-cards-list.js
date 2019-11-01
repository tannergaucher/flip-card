import React, { useContext } from 'react'

import { CardPreview } from '../card'
import { MyCardsContext } from '../context'

export default function MyCardsList() {
  const { data, loading, error } = useContext(MyCardsContext)

  return (
    <>
      {loading && <h2>Loading cards...</h2>}
      {error && (
        <h2 style={{ color: `var(--warning)` }}>Error! ${error.message}</h2>
      )}
      {data &&
        data.cards &&
        data.cards.map(card => <CardPreview key={card._id} card={card} />)}
    </>
  )
}
