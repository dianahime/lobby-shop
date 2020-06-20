import React from 'react'
import LobbyList from './component/LobbyList.js'
import CustomerRegistration from './component/CustomerRegistration.js'

import './App.css'

function App() {
  return (
    <div>
      <h1>I take you to the Lobby Shop</h1>
      <CustomerRegistration />
      <LobbyList />
    </div>
  )
}

export default App
