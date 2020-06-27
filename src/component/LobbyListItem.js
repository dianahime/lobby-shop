import React from 'react'
import styled from 'styled-components'

export default function LobbyListItem({ lobbyist, onAddToCart }) {
  return (
    <ListItemStyled>
      <img src={lobbyist.imageURL} alt={`Ein Bild von ${lobbyist.name}`}></img>
      <div className="headline-container">
        <div className="lobbyist-name">{lobbyist.name}</div>
        <div className="lobbyist-price">{lobbyist.price}</div>
      </div>
      <div className="lobbyist-description">{lobbyist.description}</div>
      <button onClick={() => onAddToCart(lobbyist)}>Isch kauf disch.</button>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.li`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 25px;
  background-color: var(--card);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  button {
    margin: 10px 10px 5px 10px;
    font-size: 1rem;
    border: none;
    color: var(--base);
    background-color: var(--text);
    padding: 10px;
    border-radius: 3px;
    text-align: center;
  }

  .headline-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
  }

  .lobbyist-name {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .lobbyist-description {
    width: 100%;
  }
`
