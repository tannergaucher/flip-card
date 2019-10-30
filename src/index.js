import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/elements'
import * as serviceWorker from './serviceWorker'

import UserProvider from './components/context/user-context'
import IsAuthProvider from './components/context/is-auth-context'
import MyCardsProvider from './components/context/my-cards-context'

ReactDOM.render(
  <IsAuthProvider>
    <UserProvider>
      <MyCardsProvider>
        <App />
      </MyCardsProvider>
    </UserProvider>
  </IsAuthProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
