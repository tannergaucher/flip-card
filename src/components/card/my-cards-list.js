import React, { useContext } from 'react'

import { CardPreview } from '../card'
import { MyCardsContext } from '../context'

export default function MyCardsList() {
  const { data, loading, error } = useContext(MyCardsContext)

  return (
    <>
      {loading && `Loading cards...`}
      {error && `Error! ${error.message}`}
      {data &&
        data.cards &&
        data.cards.map(card => <CardPreview key={card._id} card={card} />)}
    </>
  )
}
