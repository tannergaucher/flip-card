import './index.css'

import * as serviceWorker from './serviceWorker'

import {
  IsAuthProvider,
  MyCardsProvider,
  UserProvider,
} from './components/context'

import App from './components/app'
import React from 'react'
import ReactDOM from 'react-dom'

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
