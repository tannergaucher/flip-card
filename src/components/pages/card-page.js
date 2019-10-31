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
      {loading && `Loading card...`}
      {error && `Error!`}
      {data && data.card && <FlipCard card={data.card} />}
    </StyledPage>
  )
}
