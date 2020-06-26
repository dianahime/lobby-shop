import React from 'react'
import styled from 'styled-components'

export default function LobbyListItem({ lobbyist }) {
  return (
    <ListItemStyled>
      <img src={lobbyist.imageURL} alt={`Ein Bild von ${lobbyist.name}`}></img>
      <div className="headline-container">
        <div className="lobbyist-name">{lobbyist.name}</div>
        <div className="lobbyist-price">{lobbyist.price}</div>
      </div>
      <div className="lobbyist-description">{lobbyist.description}</div>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.li`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 25px;
  background-color: var(--card);

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  .headline-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .lobbyist-name {
    font-weight: bold;
    font-size: 1.2rem;
  }
`
