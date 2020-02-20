import { IsAuthContext, MyCardsContext, UserContext } from '../context'
import React, { useContext } from 'react'

export default function Logout() {
  const { setIsAuth } = useContext(IsAuthContext)
  const { setUser } = useContext(UserContext)
  const { setMyCards } = useContext(MyCardsContext)

  return (
    <button
      className="btn"
      style={{ margin: `0` }}
      onClick={() => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUser(null)
        setMyCards(null)
      }}
    >
      Logout
    </button>
  )
}
