import { DeleteCardButton, EditCardForm } from '../card'

import React from 'react'
import { useCard } from '../hooks'
import { useParams } from 'react-router-dom'

export default function EditCardPage() {
  const { cardId } = useParams(null)
  const { loading, error, data } = useCard(cardId)

  if (loading) return <h2>Loading card...</h2>

  if (error)
    return <h2 style={{ color: `var(--warning)` }}>Error! {error.message}</h2>

  return (
    <>
      <h1>Edit Card</h1>
      {data && data.card && (
        <>
          <EditCardForm card={data.card} />
          <DeleteCardButton card={data.card} />
        </>
      )}
    </>
  )
}
