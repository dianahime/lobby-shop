import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import LobbyList from './component/LobbyList'

function App() {
  const [lobbyists, setLobbyist] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2020/products')
      .then((response) => response.data)
      .then((list) => setLobbyist(list))
      .catch((error) => console.log(error))
  }, [lobbyists])

  return (
    <div className="App">
      <h1>I take you to the Lobby Shop</h1>
      <LobbyList lobbyists={lobbyists} />
    </div>
  )
}

export default App
