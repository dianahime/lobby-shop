import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LobbyListItem from './LobbyListItem'
import styled from 'styled-components'

export default function LobbyList() {
  const [lobbyists, setLobbyist] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2020/products')
      .then((response) => response.data)
      .then((list) => setLobbyist(list))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ListStyled>
      {lobbyists.map((lobbyist) => (
        <LobbyListItem lobbyist={lobbyist} key={lobbyist.name} />
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`
