import React from 'react'
import { useParams } from 'react-router-dom'

import { StyledPage, Button } from '../styles'
import { FlipCard } from '../card'
import { useCard } from '../hooks'

export default function CardPage() {
  const { cardId } = useParams()
  const { loading, error, data } = useCard(cardId)

  return (
    <StyledPage>
      {loading && `Loading card...`}
      {error && `Error!`}
      {data && data.card && (
        <>
          <CopyPageLinkButton />
          <FlipCard card={data.card} />
        </>
      )}
    </StyledPage>
  )
}

function CopyPageLinkButton() {
  return <Button>Copy link and share with a friend!</Button>
}
