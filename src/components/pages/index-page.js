import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { StyledPage } from '../styles'
import { CreateCardForm, MyCardsList } from '../card'
import { IsAuthContext } from '../context'
import { Button } from '../styles'

export default function IndexPage() {
  const { isAuth } = useContext(IsAuthContext)

  return <StyledPage>{isAuth ? <AuthedView /> : <NotAuthedView />}</StyledPage>
}

function AuthedView() {
  return (
    <>
      <CreateCardForm />
      <MyCardsList />
    </>
  )
}

const StyledNotAuthView = styled.div`
  text-align: center;

  .welcome {
    margin-bottom: 1rem;
  }

  .instructions {
    margin-bottom: 3rem;
  }
`

function NotAuthedView() {
  const history = useHistory()

  return (
    <StyledNotAuthView>
      <h1 className="welcome">Welcome to FlipCard!</h1>
      <h2 className="instructions">Sign up or log in to create a card.</h2>
      <Button fill primary onClick={() => history.push(`/login`)}>
        Log In
      </Button>
      <br />
      <Button fill onClick={() => history.push(`/signup`)}>
        Create an Account
      </Button>
    </StyledNotAuthView>
  )
}
