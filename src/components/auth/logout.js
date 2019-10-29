import React, { useContext } from 'react'

import { IsAuthContext, UserContext } from '../context'
import { Button } from '../styles'

export default function Logout() {
  const { setIsAuth } = useContext(IsAuthContext)
  const { setUser } = useContext(UserContext)

  return (
    <Button
      onClick={() => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUser(null)
      }}
    >
      Logout
    </Button>
  )
}
