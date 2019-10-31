import React, { useContext } from 'react'

import { IsAuthContext, UserContext, MyCardsContext } from '../context'
import { Button } from '../styles'

export default function Logout() {
  const { setIsAuth } = useContext(IsAuthContext)
  const { setUser } = useContext(UserContext)
  const { setMyCards } = useContext(MyCardsContext)

  return (
    <Button
      onClick={() => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUser(null)
        setMyCards(null)
      }}
    >
      Logout
    </Button>
  )
}
