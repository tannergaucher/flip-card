import React from 'react'
import { useParams } from 'react-router-dom'
import { StyledPage } from '../styles'

import { useCard } from '../hooks'
import { EditCardForm, DeleteCardButton } from '../card'

export default function EditCardPage() {
  const { cardId } = useParams(null)
  const { loading, error, data } = useCard(cardId)

  return (
    <StyledPage>
      <h1>Edit Card</h1>
      {loading && <h2>Loading...</h2>}
      {error && (
        <h2 style={{ color: `var(--warning)` }}>Error! {error.message}</h2>
      )}
      {data && data.card && (
        <>
          <EditCardForm card={data.card} />
          <DeleteCardButton card={data.card} />
        </>
      )}
    </StyledPage>
  )
}
