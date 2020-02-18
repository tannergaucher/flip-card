import './index.css'

import * as serviceWorker from './serviceWorker'

import App from './components/app'
import IsAuthProvider from './components/context/is-auth-context'
import MyCardsProvider from './components/context/my-cards-context'
import React from 'react'
import ReactDOM from 'react-dom'
import UserProvider from './components/context/user-context'

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
