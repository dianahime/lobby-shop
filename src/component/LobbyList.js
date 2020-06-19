import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import LobbyListItem from './LobbyListItem'

export default function LobbyList() {
  const [lobbyists, setLobbyist] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2020/products')
      .then((response) => response.data)
      .then((list) => setLobbyist(list))
      .catch((error) => console.log(error))
  }, [lobbyists])

  return (
    <div>
      <LobbyListItem lobbyists={lobbyists} />
    </div>
  )
}
