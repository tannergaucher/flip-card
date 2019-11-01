import React from 'react'
import { useParams } from 'react-router-dom'

import { StyledPage } from '../styles'
import { FlipCard } from '../card'
import { useCard } from '../hooks'

export default function CardPage() {
  const { cardId } = useParams()
  const { loading, error, data } = useCard(cardId)

  return (
    <StyledPage>
      {loading && <h2>Loading card...</h2>}
      {error && <h2 style={{ color: `var(--warning)` }}>Error!</h2>}
      {data && data.card && <FlipCard card={data.card} />}
    </StyledPage>
  )
}
